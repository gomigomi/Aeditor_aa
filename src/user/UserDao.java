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
	 * 
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
	public String loginUser(Map<String, String[]> loginParam){
		Connection conn=null;
		Statement stmt=null;
		String result="";
		
		String email=loginParam.get("email").toString();
		String pass=loginParam.get("pass").toString();
		
		try{
			conn=getConnection();
			stmt = conn.createStatement();
			
			String sql="SELECT email FROM user WHERE email='"+email+"' AND pass = '"+pass+"'";
			ResultSet rs=stmt.executeQuery(sql);
			
			while(rs.next()){
				result=rs.getString("email");
			}

			rs.close();
			stmt.close();
			conn.close();
			
		}catch(SQLException se){
			se.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
		}
		
		return result;
		
	}
	public String postUser(Map<String, String[]> userParam){
		
		Connection conn=null;
		Statement stmt=null;
		String result="success";
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			String sql="INSERT INTO user(name, email, phone, pass)" +
			"VALUES('"+userParam.get("name")[0].toString()+"','"+userParam.get("email")[0].toString()+"','"+userParam.get("phone")[0].toString()+"','"+userParam.get("pass")[0].toString()+"')";
			
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
	public String searchEmail(Map<String, String[]> userParam){
		Connection conn=null;
		Statement stmt=null;
		ResultSet rs;
		String result="success";
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			String sql=" SELECT name FROM user" +
			" WHERE name= " + userParam.get("name")[0].toString();
			
			rs=stmt.executeQuery(sql);

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
