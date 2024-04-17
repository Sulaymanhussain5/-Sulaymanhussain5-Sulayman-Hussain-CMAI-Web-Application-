import os #Importing the module OS (Operating System), which interacts with operating system (file and directory)
import pickle #Importing the module pickle, which loads and saves the module
import numpy as np #Importing Numpy library which works with numbers
from sklearn.model_selection import train_test_split #By using the module sklearn.model_selection i am importing train_test_split module spliting, testing and training the dataset
from sklearn.svm import SVC #By using the module sklearn.svm (Support Vector Machine) i am importing SVC (Support Vector Classification) which is a supervised learning algorithmn for classification related tasks
import cv2 #Importing cv2 (Computer Vision) which is a open cv library (very useful in image processesing and object detection in images)
import matplotlib.pyplot as plt #Importing the module matplotlib.pyplot to visualise plots and graphs of data in the images 
import random #Import random module, which allow users to generate the data


#--------------------------------DEFINING THE CLASSES AND IMAGE DIRECTORY (GETTING IMAGES)----------------------------------

#ADDING VARIABLES OF "input_dir"(locates the machine to the directory where it stores images of materials) AND "materials"(collects the classes of labels)
#input_dir = 'C:\\sulayman-hussain-cmai-web-app-v2\\Backend/AI\\Material'
#materials = ['Fabric', 'Leather', 'Cotton-Fabric']

#-----------------------------------------------------------------------------------------------------------------------------


#--------------------------------
#data = []

#for material in materials:
    #path = os.path.join(input_dir, material)
    #label = materials.index(material)

    #for img in os.listdir(path):
        #imgpath = os.path.join(path, img)
        #material_img =  cv2.imread(imgpath, 0)
        #try:
            #material_img = cv2.resize(material_img,(50,50))
            #image = np.array(material_img).flatten()
            #data.append([image,label])
        #except Exception as e:
            #pass


#print(len(data))

#--------------------------------------CREATING A DATASET FILE -----------------------------
#pick_in = open('data1.pickle', 'wb')
#pickle.dump(data,pick_in)
#pick_in.close()

#-----------------------------------------
pick_in = open('data1.pickle', 'rb') #Declaring a variable (pick_in) to open the file 'data1.pickle' where it s converted into binary and it reads the file (rb = read binary)
data=pickle.load(pick_in) #Deserialise the data from file object
pick_in.close() #After it has finished reading  the file, it close the file (proventing from memeory leaks) 

random.shuffle(data)#Genrating and shuffling  the data in the dataset
features = [] #Declaring a array variable, which collects picture of the clothes 
labels = [] #Declaring a array variable, which collects labels (classes) of the material name 

for feature, label in data: #By using the for loop, i am separating the features and labels from the data collection
    features.append(feature) #Adding featires to the feature in data (dataset)
    labels.append(label) #Adding labels to the label in data (dataset)


xtrain, xtest, ytrain,ytest = train_test_split(features, labels, test_size = 0.25) #Separates the x_train and y_train to train the dataset of feature and x_test into y_test to test the dataset in feature and labels. test_size attribute will have 25% of testing the data and 75% of training the data


#model = SVC(C=1, gamma='auto', kernel='poly')
#model.fit(xtrain, ytrain)


#--------------------------------------CREATING A MODEL -----------------------------
#pick = open('mymaterialmodel.h5', 'wb')
#pickle.dump(model,pick)
#pick.close()


#--------------------------------------READING A MODEL -----------------------------
pick = open('mymaterialmodel.sav', 'rb') #Declaring a variable (pick) to open the file 'mymaterialmodel.sav' where it s converted into binary and it reads the file (rb = read binary)
model = pickle.load(pick) #Deserialise the data from file object
pick.close() #After it has finished reading  the file, it close the file (proventing from memeory leaks) 




prediction = model.predict(xtest) #Declaring a variable "prediction" to use a model with attribute predict to predict the dataset by using the xtest
accuracy = model.score(xtest, ytest) #Desclaring a variable "accuracy" to use a model with score attribute to give accuracy of the dataset that AI has predicted by using the xtest and ytest

materials = ['Fabric', 'Leather', 'Cotton-Fabric'] #Declaring an array (material), which represents the classes 

print('Accuracy: ', accuracy) #AI gives the accuracy score that AI has predicted
print('According to the AI, this material is: ',materials[prediction[0]]) #AI gives the result of the material by using the material variable
material = xtest[0].reshape(50,50) #Takes the data stored in xtest (1 dimentional array) and it rearranges the grid with 50 rows and 50 columns 
plt.imshow(material, cmap='gray') #Display a image of the material in gray colour (cmap)
plt.show() #Shows the image