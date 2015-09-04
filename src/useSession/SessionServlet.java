package useSession;

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

//import Session.SessionDao;

public class SessionServlet extends HttpServlet{
	private static final long serialVersionUID=1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json; charset=UTF-8");//READ
			PrintWriter printout = response.getWriter();
		JSONObject JObject = new JSONObject();
		String type = request.getParameter("type");
		SessionDao dao = new SessionDao();
		try{
			if(type.equals("1")){	//User Info API
				//Map<String, String[]> loginParam = request.getParameterMap();
				JObject.put("res", dao.getName_Phone(request.getParameter("email")));
			}
		} catch (JSONException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		}
		printout.print(JObject);
		printout.flush();
	}
}