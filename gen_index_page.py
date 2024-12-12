import json

def load_json(file_path: str) -> dict:
    with open(file_path, 'r') as file:
        return json.load(file)


def generate_html(docs: dict):
    docs_title = "Frequently Visited Documentations"
    
    body = """
    body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
    """
    
    container = """
    .container {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 8px;
    }
    """
    
    table = """
    h1 {
            text-align: center;
            color: #007BFF;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
        a {
            color: #007BFF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    """
    
    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{docs_title}</title>
    <style>
        {body}
        {container}
        {table}
    </style>
</head>
<body>
    <div class="container">
        <h1>{docs_title}</h1>
        <table>
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
    """
    
    for site in docs:
        link = site.get('link')
        title = site.get('title')
        description = site.get('description')
        html_content += f"""
                <tr>
                    <td><a href="{link}" target="_blank">{title}</a></td>
                    <td>{description}</td>
                </tr>
        """
    
    html_content += """
            </tbody>
        </table>
    </div>
</body>
</html>
    """
    
    return html_content


def write_html(file_path: str, content: str):
    with open(file_path, 'w') as file:
        file.write(content)


def main():
    html_file = 'index.html'
    docs_file = './data/docs.json'

    docs = load_json(docs_file)
    
    html_content = generate_html(docs)
    
    write_html(html_file, html_content)
    print(f'Updated {html_file} successfully.')


if __name__ == '__main__':
    main()
