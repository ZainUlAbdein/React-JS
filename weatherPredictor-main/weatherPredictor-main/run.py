import joblib
import pandas as pd
import sys

model_number = int(sys.argv[1])
a = float(sys.argv[2])
b = float(sys.argv[3])
c = float(sys.argv[4])
d = float(sys.argv[5])
e = float(sys.argv[6])
f = float(sys.argv[7])
g = float(sys.argv[8])
h = float(sys.argv[9])



model_list = ["logistic_model_1.joblib",
                "logistic_model_2.joblib",
                "logistic_model_3.joblib",
                "random_forest_1.joblib",
                "random_forest_2.joblib",
                "random_forest_3.joblib",
                "neural_network_1.h5",
                "neural_network_2.h5",
                "neural_network_3.h5"
                ]
model_name = model_list[model_number-1] 

loaded_scaler = joblib.load('.\\models\\scaler.joblib')
le = joblib.load('.\\models\\lable.joblib')
if model_number > 6:
    from keras.models import load_model
    model = load_model(".\\models\\"+model_name)
    # Prepare the new data
    new_data = [[a,b,c,d,e,f,g,h]]
    # Convert new_data to a DataFrame
    new_data_df = pd.DataFrame(new_data, columns=['Precip Type', 'Temperature (C)', 'Apparent Temperature (C)', 'Humidity', 'Wind Speed (km/h)', 'Wind Bearing (degrees)', 'Visibility (km)', 'Pressure (millibars)'])

    # Predict using the trained model
    external_pred_prob = model.predict(new_data_df, verbose=0)
    external_pred = external_pred_prob.argmax(axis=1)

    # Decode the predicted classes
    external_pred = le.inverse_transform(external_pred.astype(int))

    # Print the predictio
    print(external_pred[0])
    

else:
    model = joblib.load(".\\models\\"+model_name)
    new_data = [[a,b,c,d,e,f,g,h]]

    # Convert new_data to a DataFrame
    new_data_df = pd.DataFrame(new_data, columns=['Precip Type', 'Temperature (C)', 'Apparent Temperature (C)', 'Humidity', 'Wind Speed (km/h)', 'Wind Bearing (degrees)', 'Visibility (km)', 'Pressure (millibars)'])
    new_data_scaled = loaded_scaler.transform(new_data_df)
    # Make predictions on the new data
    new_data_predictions = model.predict(new_data_scaled)

    # Print the predicted target variable values
    print(new_data_predictions[0])


# (predict(1,1, 8.6889, 8.6889, 0.93, 1.4329, 290, 5.8443, 1012.96))