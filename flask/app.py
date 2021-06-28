from flask import Flask ,render
from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///agence UR'


db=SQLAlchemy(app)

@app.route('/mon')
def items():
    return render_template('mon.html')
