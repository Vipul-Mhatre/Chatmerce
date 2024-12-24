from app import app, db
from models import seed_database

# Ensure the database creation runs within the app context
with app.app_context():
    db.create_all()
    seed_database()
    print("Database has been initialized and seeded successfully.")