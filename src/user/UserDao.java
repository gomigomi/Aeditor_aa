package user;

import java.io.Console;
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
	public HashMap <String, String> loginUser(Map<String, String[]> loginParam){
		Connection conn=null;
		Statement stmt=null;
		HashMap<String, String> result = new HashMap<String, String>();
		
		String email=loginParam.get("email")[0].toString();
		String pass=loginParam.get("pass")[0].toString();
		
		try{
			conn=getConnection();
			stmt = conn.createStatement();
			
			String sql="SELECT email,teacherReg FROM user WHERE email='"+email+"' AND pass = '"+pass+"'";
			ResultSet rs=stmt.executeQuery(sql);
			
			while(rs.next()){
				result.put("email", rs.getString("email"));
				result.put("teacherReg", rs.getString("teacherReg"));
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
	public String postTeacher(Map<String, String[]> teacherParam){
		
		Connection conn=null;
		Statement stmt=null;
		String result="success";
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			System.out.println(teacherParam.get("email")[0]);
			String sql="INSERT INTO `Aeditor`.`teacherInfo`(`email`,`addr`,`selfInfo`,`expYear`,`expMonth`,`licence`,`expert`,`major`,`reqAge`,`attitudeIntro`,`reqPay`,`multiCare`,`reqTime`,`immContact`,`monthlyWork`) " +
			" VALUES ( ' " +teacherParam.get("email")[0]+"', '"+teacherParam.get("addr")[0]+"', '"+teacherParam.get("selfInfo")[0]+"','"+teacherParam.get("expYear")[0]+"','"+teacherParam.get("expYear")[0]+"','"
					+teacherParam.get("expMonth")[0]+"','"+teacherParam.get("licence")[0]+"','"+teacherParam.get("expert")[0]+"','"
					+teacherParam.get("major")[0]+"','"+teacherParam.get("reqAge")[0]+"','"+teacherParam.get("attitudeIntro")[0]+"','"+teacherParam.get("reqPay")[0]+"','"+teacherParam.get("multiCare")[0]+"','"
					+teacherParam.get("reqTime")[0]+"','"+teacherParam.get("immContact")[0]+"','"+teacherParam.get("monthlyWork")[0]+"' )";
						
			stmt.executeUpdate(sql);
			

			sql= "UPDATE user" + 
					"SET teacherReg=1" +
					"WHERE email = ' " +teacherParam.get("email")[0] + " ' ";
			
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
	public boolean emailExist(String email){
		Connection conn=null;
		Statement stmt=null;
		ResultSet rs;
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			String sql=" SELECT email FROM user" +
			" WHERE name= '" + email + "'";
			
			rs=stmt.executeQuery(sql);

			stmt.close();
			conn.close();
			if(rs.next())
			{
				return true;
			}
			else return false;

		}catch(SQLException se){
			se.printStackTrace();
			
		}catch(Exception e){
			e.printStackTrace();
			
		}finally{}
			return false;
	}
	
	public String postChildInfo(Map<String, String[]> childParam){
		
		Connection conn=null;
		Statement stmt=null;
		String result="success";
		
		System.out.println("�빞�엫留� ");
		
		try{
			conn=getConnection();
			
			stmt=conn.createStatement();
			
			String sql="insert into `Aeditor`.`childInfo` ( `school`, `sisBro`, `character`, `age`, `like`, `email`, `disease`, `extraReq`, `dislike`, `name`) "+ 
							"values ( '"+childParam.get("school")[0]+"', '"+childParam.get("sisBro")[0]+"', '"+childParam.get("character")[0]+"', '"+childParam.get("age")[0]+"', '"+childParam.get("like")[0]+"', '"+childParam.get("email")[0]+"', '"+childParam.get("disease")[0]+"', '"+childParam.get("extraReq")[0]+"', '"+childParam.get("dislike")[0]+"', '"+childParam.get("name")[0]+"')";
			
			
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
