import api from "@/apis/network";

export default function getUserDashboard() {
  return api.get("/user_dashboard").then(res => {
    const dashboard = res.data?.data;
    const dashboardList = [];
    const unit = `${dashboard.balance.toLocaleString("ko-KR")} ${dashboard.currencyUnit}`;
    dashboardList.push(dashboard.exchange);
    dashboardList.push(unit);
    dashboardList.push(dashboard.nickName);
    dashboardList.push(dashboard.usageTime);

    return dashboardList;
  });
}
