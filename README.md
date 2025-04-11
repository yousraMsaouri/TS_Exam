## CC1_TypeScript 
Réalisée par : 
  -Yousra Msaouri Charroud
  -Loubna elbekri

 Encadré par : 
  - Mr. Lotfi EL Achak
# 🏫 Système de Gestion Scolaire - TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

## 📝 Description
Application web de gestion scolaire développée en TypeScript avec :
- Gestion des élèves, enseignants et cours
- Persistance des données via IndexedDB
- Architecture modulaire avec DAO

## ✨ Fonctionnalités
- ✅ Inscription des élèves
- 📚 Création de cours (Maths, Sciences, Histoire)
- 👨‍🏫 Attribution des enseignants
- ➕ Services supplémentaires (tutorat, activités)
- 💾 Stockage local avec IndexedDB

## 📁 Project Structure
src/
├── main.ts

├── models/
│   ├── Student.ts
│   ├── Teacher.ts
│   ├── Course.ts
│   ├── MathCourse.ts
│   ├── ScienceCourse.ts
│   ├── HistoryCourse.ts
│   ├── Classroom.ts
│   ├── Resource.ts
│   └── Service.ts

├── dao/
│   ├── IDBManager.ts           // IndexedDB wrapper
│   ├── IStudentDAO.ts
│   ├── ITeacherDAO.ts
│   ├── ICourseDAO.ts
│   ├── StudentDAO.ts
│   ├── TeacherDAO.ts
│   └── CourseDAO.ts

├── factory/
│   └── CourseFactory.ts

├── decorators/
│   ├── TutoringDecorator.ts
│   ├── SportDecorator.ts
│   └── ArtDecorator.ts

├── singleton/
│   └── ResourceManager.ts

## 🗃️ Diagramme de classe 
+----------------+       +----------------+       +----------------+
|    Student     |       |     Course     |       |    Teacher     |
+----------------+       +----------------+       +----------------+
| - id: string   |       | - id: string   |       | - id: string   |
| - name: string |       | - name: string |       | - name: string |
| - email: string|       | - credits: num |       | - email: string|
+----------------+       | - teacher: ref|       +----------------+
       ^                  +----------------+             ^
       |                         ^                      |
       |                         |                      |
+----------------+       +----------------+       +----------------+
| StudentService |       | CourseFactory  |       | TeacherManager |
+----------------+       +----------------+       +----------------+
| + addService() |       | + create()     |       | + assignToClass|
+----------------+       +----------------+       +----------------+
       ^
       |
+----------------+       +----------------+
| Tutoring       |       | Sports         |
+----------------+       +----------------+
| - subject      |       | - sportType    |
| - hours        |       | - schedule     |
+----------------+       +----------------+

## 🧪 Testing
Les tests étudiants incluent :
Opérations CRUD de base
Inscription aux cours
Gestion des services (soutien scolaire, sports, arts)
Recherche par e-mail
Filtrage par cours
Filtrage par service
![image](https://github.com/user-attachments/assets/28626de5-d81c-4c53-94cc-e7377352ff9f)

## 📚 Dependencies
TypeScript
IndexedDB
UUID
fake-indexeddb (pour tester dans terminal)

## 🚀 Push GitHub 
git init                                                
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yousraMsaouri/TS_Exam.git
git push -u origin main --force
