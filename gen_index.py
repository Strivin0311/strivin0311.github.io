import json

def load_json(file_path: str) -> dict:
    """加载 JSON 文件"""
    with open(file_path, 'r') as file:
        return json.load(file)


def generate_html(tables_config: dict) -> str:
    """根据配置生成 HTML 内容"""
    
    index_title = "Strivin Github.io"
    
    # CSS 样式
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
    
    # 生成 HTML 内容
    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{index_title}</title>
    <style>
        {body}
        {container}
        {table}
    </style>
</head>
<body>
    <div class="container">
    """
    
    # 遍历配置字典，生成表格
    for table_name, table_config in tables_config.items():
        title = table_config.get("title")
        data_file = table_config.get("data_file")
        
        # 加载数据
        data = load_json(data_file)
        
        # 添加表格标题
        html_content += f"""
        <h1>{title}</h1>
        <table>
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
        """
        
        # 添加表格内容
        for item in data:
            link = item.get('link')
            title = item.get('title')
            description = item.get('description')
            html_content += f"""
                <tr>
                    <td><a href="{link}" target="_blank">{title}</a></td>
                    <td>{description}</td>
                </tr>
            """
        
        html_content += """
            </tbody>
        </table>
        """
    
    html_content += """
    </div>
</body>
</html>
    """
    
    return html_content


def write_html(file_path: str, content: str):
    """将 HTML 内容写入文件"""
    with open(file_path, 'w') as file:
        file.write(content)


def main():
    # 配置文件路径
    html_file = 'index.html'
    
    # 表格配置字典
    tables_config = {
        "workspaces": {
            "title": "Workspaces",
            "data_file": "./data/workspaces.json"  # Workspaces 数据文件路径
        },
        "assistants": {
            "title": "Assistants",
            "data_file": "./data/assistants.json"  # Assistants 数据文件路径
        },
        "pubs": {
            "title": "Publications",
            "data_file": "./data/pubs.json"  # Pubs 数据文件路径
        },
        "docs": {
            "title": "Documentations",
            "data_file": "./data/docs.json"  # Docs 数据文件路径
        },
        # 添加新的表格配置
        # "projects": {
        #     "title": "Projects",
        #     "data_file": "./data/projects.json"  # Projects 数据文件路径
        # }
    }
    
    # 生成 HTML
    html_content = generate_html(tables_config)
    
    # 写入文件
    write_html(html_file, html_content)
    print(f'Updated {html_file} successfully.')


if __name__ == '__main__':
    main()