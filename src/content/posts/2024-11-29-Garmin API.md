---
title: "Garmin API"
description: ""
slug: "garmin-api"
publishDate: 2024-11-29T10:00:05+08:00
tags: ["python", "garmin"]
---

```python
from flask import Flask, jsonify, request
from flask_cors import CORS

import sqlite3

app = Flask(__name__)

# 数据库连接函数
def get_db_connection():
    conn = sqlite3.connect('garmin_activities.db')  # 请确保数据库文件名正确
    conn.row_factory = sqlite3.Row
    return conn

# 查询活动的 API
@app.route('/api/activities', methods=['GET'])
def get_activities():
    conn = get_db_connection()
    cursor = conn.cursor()

    # 获取查询参数
    sport = request.args.get('sport')
    activity_type = request.args.get('type')

    # 构建基本查询
    query = "SELECT * FROM activities"
    filters = []

    # 添加条件
    if sport:
        filters.append(f"sport = '{sport}'")
    if activity_type:
        filters.append(f"type = '{activity_type}'")

    if filters:
        query += " WHERE " + " AND ".join(filters)

    cursor.execute(query)
    activities = cursor.fetchall()

    # 关闭连接
    conn.close()

    # 将查询结果转换为 JSON 格式
    return jsonify([dict(activity) for activity in activities])
CORS(app, resources=r'/*')
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
```