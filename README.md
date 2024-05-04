# React + Vite

Demo: 
https://omar-test-unifi.netlify.app/

APIS :
For search with paginations
1-https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw

For get count of matching stolen bikes
2-https://bikeindex.org:443/api/v3/search/count?location=IP&distance=10&stolenness=stolen&access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw

For get bike details by id 
3-https://bikeindex.org:443/api/v3/bikes/232?access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw

Scenario
- Initial loading of main page will see spinner until get results 5 resutls pe page
- The end of main page will see total of stolean bikes
- If click on image or title of card will navigate to bike details
- In the event of an error occurring, a toast notification will be displayed in the lower right corner of the screen to inform the user.

Tools :
- Axios Libray for APIS 
Axios helps for its features : because can use it in utils folder and take advantage of axios interceptors :
like write domain , and get any error from any api to inoke toast of error
- State Management : ReduxToolKit
- Toast library for notifications
- Pure Css with css varibals (root)
- react-paginations
  
