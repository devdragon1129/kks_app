import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import isEmpty from "./../../is-empty";

const Adminroomdetail = (props) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(isEmpty(props.roomdetail) ? [] : props.roomdetail);
  }, [props.roomdetail]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.subtitletext}>
          {isEmpty(result) ? "" : result.filename}
        </Text>
        <Text style={styles.titletext}>
          Room {isEmpty(result) ? "" : result.datas[0].room}
        </Text>
      </View>
      <View>
        <View style={styles.tableheader}>
          <View style={styles.tabletr}>
            <Text style={styles.tabletrtext}>Rooms:</Text>
          </View>
          <View style={styles.tabletr}>
            <Text style={styles.tabletrtext}>Status:</Text>
          </View>
          <View style={styles.tabletr2}></View>
        </View>
        <View style={styles.tablecontent}>
          <View style={styles.tabletd}>
            <Text style={styles.tabletdtext}>
              {isEmpty(result) ? "" : result.datas[0].unit}
            </Text>
          </View>
          <View
            style={
              isEmpty(result)
                ? styles.tabletdcom1
                : result.datas[0].room === 0
                ? styles.tabletdtodo1
                : result.datas[0].room === 1
                ? styles.tabletdrun1
                : styles.tabletdcom1
            }
          >
            <Text style={styles.tabletdtext1}>
              {isEmpty(result)
                ? "Completed"
                : result.datas[0].room === 0
                ? "Not done"
                : result.datas[0].room === 1
                ? "Partial"
                : "Completed"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.tabletd2}
            onPress={() => props.setpageflagfunc("roomdetailproject")}
          >
            <FontAwesome name="edit" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <View style={styles.tableheader}>
          <View style={styles.tabletr}>
            <Text style={styles.tabletrtext}>Parameters:</Text>
          </View>
          <View style={styles.tabletr}></View>
          <View style={styles.tabletr2}></View>
        </View>

        {/* content block */}
        <View style={styles.tablecontent}>
          <View style={styles.tabletd}>
            <Text style={styles.tabletdtext}>
              {isEmpty(result) ? "" : result.datas[0].airflow2 + " m3/h"}
            </Text>
          </View>
          <View
            style={
              isEmpty(result)
                ? styles.tabletdcom1
                : result.datas[0].room === 0
                ? styles.tabletdtodo1
                : result.datas[0].room === 1
                ? styles.tabletdrun1
                : styles.tabletdcom1
            }
          >
            <Text style={styles.tabletdtext1}>
              {isEmpty(result)
                ? "Completed"
                : result.datas[0].room === 0
                ? "Not done"
                : result.datas[0].room === 1
                ? "Partial"
                : "Completed"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.tabletd2}
            onPress={() => props.setpageflagfunc("roomdetailproject")}
          >
            <FontAwesome name="edit" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.tablecontent}>
          <View style={styles.tabletd}>
            <Text style={styles.tabletdtext}>
              {isEmpty(result) ? "" : result.datas[0].max_humidity + " Pa"}
            </Text>
          </View>
          <View
            style={
              isEmpty(result)
                ? styles.tabletdcom1
                : result.datas[0].room === 0
                ? styles.tabletdtodo1
                : result.datas[0].room === 1
                ? styles.tabletdrun1
                : styles.tabletdcom1
            }
          >
            <Text style={styles.tabletdtext1}>
              {isEmpty(result)
                ? "Completed"
                : result.datas[0].room === 0
                ? "Not done"
                : result.datas[0].room === 1
                ? "Partial"
                : "Completed"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.tabletd2}
            onPress={() => props.setpageflagfunc("roomdetailproject")}
          >
            <FontAwesome name="edit" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.tablecontent}>
          <View style={styles.tabletd}>
            <Text style={styles.tabletdtext}>
              {isEmpty(result) ? "" : result.datas[0].min_humidity + " %"}
            </Text>
          </View>
          <View
            style={
              isEmpty(result)
                ? styles.tabletdcom1
                : result.datas[0].room === 0
                ? styles.tabletdtodo1
                : result.datas[0].room === 1
                ? styles.tabletdrun1
                : styles.tabletdcom1
            }
          >
            <Text style={styles.tabletdtext1}>
              {isEmpty(result)
                ? "Completed"
                : result.datas[0].room === 0
                ? "Not done"
                : result.datas[0].room === 1
                ? "Partial"
                : "Completed"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.tabletd2}
            onPress={() => props.setpageflagfunc("roomdetailproject")}
          >
            <FontAwesome name="edit" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.tablecontent}>
          <View style={styles.tabletd}>
            <Text style={styles.tabletdtext}>
              {isEmpty(result) ? "" : result.datas[0].max_airflow + " m3/h"}
            </Text>
          </View>
          <View
            style={
              isEmpty(result)
                ? styles.tabletdcom1
                : result.datas[0].room === 0
                ? styles.tabletdtodo1
                : result.datas[0].room === 1
                ? styles.tabletdrun1
                : styles.tabletdcom1
            }
          >
            <Text style={styles.tabletdtext1}>
              {isEmpty(result)
                ? "Completed"
                : result.datas[0].room === 0
                ? "Not done"
                : result.datas[0].room === 1
                ? "Partial"
                : "Completed"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.tabletd2}
            onPress={() => props.setpageflagfunc("roomdetailproject")}
          >
            <FontAwesome name="edit" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* end content block */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  subtitletext: {
    fontSize: 20,
    letterSpacing: 1,
  },
  titletext: {
    fontSize: 35,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  tableheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tabletr: {
    flex: 4,
  },
  tabletr2: {
    flex: 2,
  },
  tablecontent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 7,
  },
  tabletd: {
    width: "35%",
    backgroundColor: "#0071bc",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 15,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  tabletdcom1: {
    width: "35%",
    marginRight: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0071bc",
  },
  tabletdrun1: {
    width: "35%",
    marginRight: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0071bc",
    backgroundColor: "#c9dfee",
  },
  tabletdtodo1: {
    width: "35%",
    marginRight: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0071bc",
    backgroundColor: "#99c6e4",
  },
  tabletd2: {
    width: "20%",
    borderRadius: 20,
    backgroundColor: "#0071bc",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  tabletrtext: {
    fontSize: 20,
    textDecorationColor: "#000",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  tabletdtext: {
    color: "#fff",
    fontSize: 20,
  },
  tabletdtext1: {
    color: "#0071bc",
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  roomdetail: state.roomdetail.data,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Adminroomdetail);
