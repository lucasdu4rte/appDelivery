import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";
import { connect } from "react-redux";

import {
  Container,
  OrderList,
  Order,
  Info,
  Description,
  PrepareTime,
  Price
} from "./styles";

import Header from "~/components/Header";
import api from "~/services/api";
import { colors } from "~/styles";

moment.locale("pt-br");

const styleShadow = {
  shadowColor: "#bdc3c7",
  shadowOffset: {
    width: 0,
    height: 7
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15
};

const Profile = props => {
  const { profile } = props;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/orders?filter_by_user_id=${profile.id}`).then(({ data }) => {
      setOrders(
        data
          .map(order => ({
            ...order,
            totalFormated: new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL"
            }).format(order.total),
            orderDateFormated: moment(order.order_date).fromNow()
          }))
          .sort((a, b) => moment(b.order_date) - moment(a.order_date))
      );
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header title="Perfil" leftComponent="" />

      <View
        style={{
          marginBottom: 5,
          marginTop: 10,
          // marginHorizontal: 20,
          backgroundColor: colors.white,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 6
          // ...styleShadow
        }}
      >
        <Text style={{ color: colors.black, fontSize: 22, fontWeight: "bold" }}>
          Informações Pessoais
        </Text>

        <View
          style={{
            marginBottom: 5,
            marginTop: 10,
            // marginHorizontal: 20,
            backgroundColor: colors.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 6
            // ...styleShadow
          }}
        >
          <Text style={{ color: colors.dark, fontSize: 18, fontWeight: "600" }}>
            {profile.name}
          </Text>
          <Text style={{ color: colors.black, fontSize: 14 }}>
            {profile.email}
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: colors.black,
          fontSize: 22,
          fontWeight: "bold",
          paddingHorizontal: 20
        }}
      >
        Últimos pedidos
      </Text>

      <OrderList
        // ListHeaderComponent={() => }
        ListHeaderComponent={() =>
          loading && <ActivityIndicator size="small" color={colors.dark} style={{ marginTop: 15 }} />
        }
        data={orders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Order
            // onPress={() => this.handleCategoryPress(category)}
            style={styleShadow}
          >
            <Info>
              <Description>Pedido #{item.id}</Description>
              <PrepareTime>{item.orderDateFormated}</PrepareTime>
              <Price>{item.totalFormated}</Price>
            </Info>
          </Order>
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(Profile);
