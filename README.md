To run the node version

    cd node-express && npm install && npm start

To run the dotnet version

    cd dotnet-core && dotnet restore && dotnet run -c Release 


To test performance of the node version

    wrk -c 60 -t 3 -d 5 http://localhost:3333

To test performance of the dotnet core version

    wrk -c 60 -t 3 -d 5 http://localhost:5000/Home/About


### Results

#### node

```
wrk -c 60 -t 3 -d 5 http://localhost:3333

Running 5s test @ http://localhost:3333
  3 threads and 60 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.13ms    1.39ms  41.02ms   86.92%
    Req/Sec     9.85k     1.12k   13.78k    70.38%
  137350 requests in 5.00s, 49.12MB read
Requests/sec:  27471.42
Transfer/sec:      9.82MB
```

#### dotnet

```
wrk -c 60 -t 3 -d 5 http://localhost:5000/Home/About

Running 5s test @ http://localhost:5000/Home/About
  3 threads and 60 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.50ms  839.67us  36.91ms   95.90%
    Req/Sec    13.93k     1.47k   17.56k    72.75%
  195021 requests in 5.00s, 79.23MB read
Requests/sec:  39008.09
Transfer/sec:     15.85MB
```
