#include "bus.h"

class Route: public Bus{
  int line;
  string destination;
  Bus(){
  }
  Bus(int line,string destination){
    this->line = line;
    this->destination = destination;
  }
  void print(){
    cout <<"id\t\driver\tline\tdestination";
    cout <<this->id<<"\t"<<this->driver<<"\t"<<this->line<<"\t"
    <<this->destination<<endl;
  }
};
