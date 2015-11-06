package com.theironyard;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import static org.junit.Assert.*;

/**
 * Created by BennettIronYard on 11/5/15.
 */
public class MainTest {
    public Connection startConnection() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./test");
        Main.createTable(conn);
        return conn;
    }

    public void endConnection(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("DROP TABLE menu");
        //stmt.execute("DROP TABLE menu");
        conn.close();
    }

    @Test
    public void testMenuItem() throws SQLException {
        Connection conn = startConnection();
        Main.insertMenuItem(conn, "Steak", "entree", true, true, true, 25.00, false, false, 2);
        Main.insertMenuItem(conn, "Salad", "app", false, true, true, 10.00, true, true, 1);
        menuItem menuItem = Main.selectMenuItem(conn, 1);
        endConnection(conn);
        assertTrue(menuItem != null);
    }
}