from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hola tonotos, World! This is my Python API.'



if __name__ == '__main__':
    app.run(debug=True)