# Badminton Group App — DevOps Portfolio 🏸

## 🔧 Overview
เว็บสำหรับจัดก๊วนตีแบด แบ่งทีม สุ่มคู่ เล่นเป็นทีม — สร้างขึ้นเพื่อเป็นโปรเจกต์โชว์ความรู้ DevOps:  
- แบ็กเอนด์ด้วย Node.js + Express  
- รันผ่าน Docker container  
- ตั้งค่าให้ run บน WSL2 + Docker Desktop (Windows)  
- โค้ดเก็บใน GitHub  

## 🚀 Quick Start (Local / Docker)
```bash
git clone https://github.com/boot2ass/badminton-app-devops.git
cd badminton-app-devops
docker build -t badminton-app .
docker run -d -p 3000:3000 badminton-app
