package user;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

public class UserServlet extends HttpServlet {
	private static final long serialVersionUID=1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json; charset=UTF-8");//READ

		PrintWriter printout = response.getWriter();
		JSONObject JObject = new JSONObject();
		String type = request.getParameter("type");

		UserDao dao = new UserDao();

		try{
			if(type.equals("1")){	//User Info API
				Map<String, String[]> loginParam = request.getParameterMap();			
				JObject.put("res", dao.loginUser(loginParam));
			}
//			else if(type.equals("2")){	//Login API
//				
//				String id = request.getParameter("id");
//				String pass = request.getParameter("pass");
//				
//				JObject.put("result", dao.loginUser(id, pass));
//			}else if(type.equals("3")){	//ID중복 API
//				
//				String check_id = request.getParameter("id");
//				
//				JObject.put("result", dao.checkUser(check_id));
//			}


		}catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		printout.print(JObject);
		printout.flush();
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json; charset=UTF-8");//CREATE

		PrintWriter printout = response.getWriter();
		JSONObject JObject = new JSONObject();
		
		String type = request.getParameter("type");

		UserDao dao = new UserDao();
//		Map<String, String[]> userParam = request.getParameterMap();

		try{
			if(type.equals("1")){	//Sign in API
				Map<String, String[]> userParam = request.getParameterMap();				
				JObject.put("result", dao.postUser(userParam));
			}
		}catch(JSONException e){
			
			e.printStackTrace();
		}
		printout.print(JObject);
		printout.flush();
	}
//
//	public void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.setContentType("application/json; charset=UTF-8");//DELETE
//
//		PrintWriter printout = response.getWriter();
//		JSONObject JObject = new JSONObject();
//
//		UserDao dao = new UserDao();
//		
//		String userId = request.getParameter("id");
//
//		
//		try{
//			JObject.put("result", dao.deleteUser(userId));
//		}catch(JSONException e){
//			e.printStackTrace();
//		}
//		printout.print(JObject);
//		printout.flush();
//	}

}
