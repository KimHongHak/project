#pragma once
class Bus {
  int id;
  string driver;
  Bus(){
  }
  Bus(int id,string driver){
    this->id = id;
    this->driver = driver;
  }
  void input(){
   cout << "id: ";cin >> this->id;
   cout << "driver"; cin.ignore();cin.getline(this->driver,20);
  }
  void output(){
    cout<<"id\tdriver";
    cout <<this->id<<this->driver;
  }
};
