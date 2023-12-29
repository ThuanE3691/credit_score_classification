from flask import Flask, request, jsonify
from flask_cors import CORS
import onnxruntime as rt


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({'message': 'Hello from Flask!'})


# Route for seeing a data
@app.route('/api/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name':"geek",
        "Age":"22",
        "Date":'5',
        "programming":"python"
    }

@app.route('/api/post_data', methods=['POST'])
def receive_data():
    data = request.get_json()  # Access JSON data from the request
    # Process the data as needed


    sess = rt.InferenceSession("rf_iris.onnx", providers=["CPUExecutionProvider"])
    input_name = sess.get_inputs()[0].name
    label_name = sess.get_outputs()[0].name

    print(input_name, label_name)
    return {'message': 'Data received successfully', 'data': data}

if __name__ == '__main__':
    app.run(port=5000)