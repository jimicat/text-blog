---
title: "python operation s3"
description: ""
slug: "python-operation-s3"
publishDate: 2024-11-15T13:04:50+08:00
tags: ["s3", "python"]
---

配置访问凭证

```bash
~/.aws/credentials

[default]
aws_access_key_id = AKIATXBI6Zxxxxx
aws_secret_access_key = bh4Z5Xq9cM/U/7XZxxxx
```

`pip install boto3`

```python
import boto3

bucket_name = 'prd-uz'
file_path = 'test.md'
s3_key = 'test.md' #上传到 S3 的根目录

# 创建 S3 客户端
s3 = boto3.client('s3',region_name='me-central-1')

# 上传文件
s3.upload_file(file_path, bucket_name, s3_key)
print("File uploaded successfully.")


# 生成预签名 URL
url = s3.generate_presigned_url(
    'get_object',
    Params={'Bucket': bucket_name, 'Key': s3_key},
    ExpiresIn=3600
)
print("Presigned URL:", url)
```