#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include <QDebug>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    // connect(ui->pushButton, SIGNAL(clicked()), this, SLOT(testbtn())) ;
    //    connect(ui->pushButton, SIGNAL(clicked()), this, SLOT(testbtn()));
    connect(ui->pushButton, &QPushButton::clicked, this, &MainWindow::testbtn);
        connect(ui->pushButton_2, &QPushButton::clicked, this, &MainWindow::exit);

}
void MainWindow::testbtn()
{
   QString s0 = ui->lineEdit->text();
   QString s1 = ui->lineEdit_2->text();
   int i0 = s0.toInt();
   int i1 = s1.toInt();
   int i = i0 + i1;
   QString s = QString::number(i);
   ui->lineEdit_3->setText(s);
   qDebug() << i0+i1;

}
int MainWindow::exit(){
    std::exit(0);
   
}
MainWindow::~MainWindow()
{
    delete ui;
}
