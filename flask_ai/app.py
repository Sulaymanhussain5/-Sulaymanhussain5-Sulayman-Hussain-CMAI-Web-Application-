from flask import Flask, render_template, request #Imprting flask framwork with modules of render_templater (render html templates) and request (handle HTTP request)
import joblib #Importing jotlib module which loads and lerarn AI models
import numpy as np #Importing Numpy library which works with numbers

app = Flask(__name__) #Starting the flask application
materials = { #Creating a dictionary that lets the flask application picks the material using material variable and display it in the html page
    0: 'Fabric',#Adding key of 0 (id) and value of "Fabric"(material)
    1: 'Leather', #Adding key of 1 (id) and value of "Leather"(material)
    2: 'Cotton Fabric' #Adding key of 2 (id) and value of "Cotton Fabric"(material)
}
@app.route("/model") #Adding a route with the endpoint of "/model"
def load_model():#Creating a function that loads the AI model.
    global model #Creating a global variable (model) which can be used anywhere in the flask application
    model_path = 'C:\\sulayman-hussain-cmai-web-app-v2\\Backend\\flask_ai\\data1.pickle'  # Creating a model_path variable that locates the pickle file, which includes the dataset of the AI model
    model = joblib.load(model_path) #Creating a model variable which allows the flask to load the model
    return render_template("material.html") #Rendering the html page (material.html), which allows the user to insert a image of clothes and predicts the material.

@app.route("/") #Adding a route with the endpoint of "/"
def index():#Creating a function that renders the material.html page
    return render_template('material.html') #Using render_template module to render the html page (material.html)

@app.route("/predict", methods=['POST']) #Adding a route with the endpoint of "/predict" and methods of "POST"
def predict():#Creating a function that handles file process 
    if 'file' not in request.files: #If the input box does not require any files, then it will use prediction_result attribute to give the error stating that files is not uploaded
        return render_template('material.html', prediction_result="No file uploaded") #Renders the html page (material.html) with a error message

    file = request.files['file']#By using the file variable, flask is getting the file that was submitted by the user
    if file.filename == '': #If the file is empty
        return render_template('material.html', prediction_result="No selected file")#Will render the material.html page with a message stating that file is not uploaded

    if file: #If the file has been uploaded in the page
        prediction_class = np.random.randint(3) #Adding prediction_class variable, it randomise the number between 0 to 2, (0=Fabric, 1=Leather and 2=Cotton Fabric)
        prediction_result = materials.get(prediction_class) #Adding prediction_result to get the directory called material and assigned to the prediction_class
        return render_template('material.html', prediction_result=prediction_result)

if __name__ == '__main__': #Ending the flask application 
    app.run(port=8000,debug=True) #Running the flask application with port number 8000 and turning on debugging mode