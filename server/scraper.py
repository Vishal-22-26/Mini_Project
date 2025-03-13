import requests
from bs4 import BeautifulSoup
import json
import os

def scrape_schemes():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get('https://agriwelfare.gov.in/en/Major', headers=headers)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')
        print(soup.prettify())  # Debugging: Check parsed HTML

        schemes = []

        table_body = soup.find('tbody')
        if table_body:
            rows = table_body.find_all('tr')

            for row in rows:
                columns = row.find_all('td')
                if len(columns) >= 3:
                    scheme = {
                        'title': columns[1].get_text(strip=True),
                        'lastDate': columns[2].get_text(strip=True),
                        'guideline_links': [],
                        'official_links': []
                    }

                    if len(columns) > 3 and columns[3]:  
                        links = columns[3].find_all('a')
                        for link in links:
                            href = link.get('href')
                            text = link.get_text(strip=True).lower()

                            if 'download' in text or '.pdf' in href:
                                scheme['guideline_links'].append(href)
                            elif 'link' in text:
                                scheme['official_links'].append(href)

                    schemes.append(scheme)

        # Save to JSON
        output_path = os.path.join(os.path.dirname(__file__), 'schemes_data.json')
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(schemes, f, ensure_ascii=False, indent=2)

        return schemes

    except Exception as e:
        print(f"Error scraping data: {str(e)}")
        return []

if __name__ == "__main__":
    scraped_data = scrape_schemes()
    for scheme in scraped_data:
        print(scheme)
