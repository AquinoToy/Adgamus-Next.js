from flask import Flask, request, jsonify
from genetics_calculations import GeneticsCalculations  # Importa la clase

app = Flask(__name__)

@app.route('/api/genetics', methods=['GET', 'POST'])
def get_genetics_data():
    print(f"Request method: {request.method}")
    if request.method == 'POST':
        if request.is_json:
            data = request.json
            print('Received JSON data:', data)
            parent_genotype = data.get('parentGenotype')
            mother_genotype = data.get('motherGenotype')

            # Aquí puedes realizar las operaciones que necesites con los datos recibidos
            response_message = (
                f"Received parent genotypeHolaaaaa: {parent_genotype}, "
                f"mother genotype: {mother_genotype}. Hola tonotos, World! This is my Python API."
            )

            return jsonify({"message": response_message})
        else:
            return jsonify({"message": "Content-Type must be application/json"}), 415
    
    elif request.method == 'GET':
        print('Content-Type is not application/json')
        # Puedes manejar la solicitud GET aquí si es necesario
        return jsonify({"message": "This endpoint only supports POST requests for genetic data."}), 405

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
