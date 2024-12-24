from flask_sqlalchemy import SQLAlchemy
from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }

def seed_database():
    products = [
        Product(name='Smartphone', price=699.99, description='High-performance smartphone'),
        Product(name='Laptop', price=1299.99, description='Lightweight and powerful laptop'),
        Product(name='Tablet', price=399.99, description='Compact and versatile tablet'),
        Product(name='Smartwatch', price=199.99, description='Stylish smartwatch with fitness tracking'),
        Product(name='Headphones', price=99.99, description='Noise-cancelling headphones'),
    ]
    db.create_all()
    db.session.add_all(products)
    db.session.commit()