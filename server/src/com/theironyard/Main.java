package com.theironyard;

import java.sql.*;

public class Main {
    public static void createTable(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS menu (id IDENTITY, name VARCHAR, type VARCHAR, breakfast BOOLEAN, lunch BOOLEAN, dinner BOOLEAN, price DECIMAL, vegetarian BOOLEAN, glutenFree BOOLEAN, priceRange int)");
    }

    public static void insertMenuItem(Connection conn, String name,String type,boolean breakfast, boolean lunch, boolean dinner, double price, boolean vegetarian, boolean glutenFree, int priceRange) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO menu (NULL,?,?,?,?,?,?,?,?,?)");
        stmt.setString(1,name);
        stmt.setString(2,type);
        stmt.setBoolean(3,breakfast);
        stmt.setBoolean(4,lunch);
        stmt.setBoolean(5,dinner);
        stmt.setDouble(6,price);
        stmt.setBoolean(7,vegetarian);
        stmt.setBoolean(8,glutenFree);
        stmt.setInt(9,priceRange);
        stmt.execute();
    }
    public static MenuItem selectMenuItem(Connection conn, String name) throws SQLException {
        MenuItem menuItem = null;
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM menu WHERE name =?");
        stmt.setString(1, name);
        ResultSet results = stmt.executeQuery();
        if (results.next()) {
            menuItem = new MenuItem();
            menuItem.name = results.getString("name");
            menuItem.type = results.getString("type");
            menuItem.breakfast = results.getBoolean("breakfast");
            menuItem.lunch = results.getBoolean("lunch");
            menuItem.dinner = results.getBoolean("dinner");
            menuItem.price = results.getDouble("price");
            menuItem.vegetarian = results.getBoolean("vegetarian");
            menuItem.glutenFree = results.getBoolean("glutenFree");
            menuItem.priceRange = results.getInt("priceRange");
        }
        return menuItem;
    }




    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbd:h2:./main");
        createTable(conn);


    }


}
