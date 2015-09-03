package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserDao {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	static final String DB_URL = "jdbc:mysql://1.255.55.98:3306/Aeditor";

	static final String USER = "root";
	static final String PASS = "U27nd?6N4rd";
	
	/**
	 * 커넥션 공동 메소드
	 * @returna
	 * @throws ClassNotFoundException
	 */
	public Connection getConnection() throws ClassNotFoundException{
		Connection dbConn = null;
		
		try{
			Class.forName(JDBC_DRIVER);
			dbConn = DriverManager.getConnection(DB_URL,USER,PASS);
			
		}catch(SQLException e){
			e.printStackTrace();
		}
		return dbConn;
	}
	
	public String postUser(Map<String, String[]> userParam){
		
		Connection conn=null;
		Statement stmt=null;
		String result="success";
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			String sql="INSERT INTO user(name, email, phone, pass, class)" +
			"VALUES('"+userParam.get("name")[0].toString()+"','"+userParam.get("email")[0].toString()+"','"+userParam.get("phone")[0].toString()+"','"+userParam.get("pass")[0].toString()+"','1')";
			
			stmt.executeUpdate(sql);

			stmt.close();
			conn.close();

		}catch(SQLException se){
			se.printStackTrace();
			result = "fail";
		}catch(Exception e){
			e.printStackTrace();
			result = "fail";
		}finally{
			
		}
		
		return result;
		
	}
	
	

}
