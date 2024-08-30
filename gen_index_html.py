import json

# 读取 JSON 文件并解析数据
def load_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# 生成 HTML 内容
def generate_html(sites):
    html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Favorite Sites</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
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
    </style>
</head>
<body>
    <div class="container">
        <h1>Favorite Sites</h1>
        <table>
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
    """
    
    # 遍历每个站点并生成表格行
    for site in sites:
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

# 写入 HTML 文件
def write_html(file_path, content):
    with open(file_path, 'w') as file:
        file.write(content)

# 主函数
def main():
    json_file = 'favorite_sites.json'  # JSON 文件路径
    html_file = 'index.html'  # 生成的 HTML 文件路径

    # 读取 JSON 数据
    sites = load_json(json_file)
    
    # 生成 HTML 内容
    html_content = generate_html(sites)
    
    # 写入 HTML 文件
    write_html(html_file, html_content)
    print(f'Updated {html_file} successfully.')

if __name__ == '__main__':
    main()
