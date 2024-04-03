import CustomCheckbox from "@/screens/CustomCheckbox";
import CustomSwitch from "@/screens/CustomSwitch";
import Layout from "@/screens/Layout";

export default function Home() {
  return (
    <Layout>
      <CustomSwitch />
      <CustomSwitch checked />
      <CustomSwitch disabled />
      <CustomSwitch disabled checked />
      <CustomCheckbox />
      <CustomCheckbox />
      <CustomCheckbox />
    </Layout>
  );
}
