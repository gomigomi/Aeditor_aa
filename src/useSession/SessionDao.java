package useSession;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SessionDao {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	static final String DB_URL = "jdbc:mysql://1.255.55.98:3306/Aeditor";

	static final String USER = "root";
	static final String PASS = "U27nd?6N4rd";
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
	public HashMap<String,String> getName_Phone(String email)
	{
		HashMap<String,String> result = new HashMap<String,String>();
		Connection conn=null;
		Statement stmt=null;
		
		try{
			conn=getConnection();
			stmt = conn.createStatement();
			
			String sql="SELECT name, phone FROM user WHERE email= '"+email+"'";
			ResultSet rs=stmt.executeQuery(sql);
			while(rs.next()){
				result.put("name", rs.getString("name"));
				result.put("phone", rs.getString("phone"));
			}
			
			rs.close();
			stmt.close();
			conn.close();
			
		}catch(SQLException se){
			se.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{}
		
		return result;
	}
}
