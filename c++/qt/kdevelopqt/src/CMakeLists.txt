qt5_add_resources(kdevelopqt_SRCS resources.qrc)
add_executable(kdevelopqt main.cpp ${kdevelopqt_SRCS})
target_link_libraries(kdevelopqt Qt5::Qml Qt5::Gui)

