To run the node version

    cd node-express && npm install && npm start

To run the dotnet version

    cd dotnet-core && dotnet restore && dotnet run -c Release 


To test performance of the node version

    wrk -c 33 -t 3 -d 5 http://localhost:3333

To test performance of the dotnet core version

    wrk -c 33 -t 3 -d 5 http://localhost:5000/Home/About
