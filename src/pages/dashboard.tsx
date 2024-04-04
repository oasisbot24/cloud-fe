import CustomCheckbox from "@/components/CustomCheckbox";
import CustomSwitch from "@/components/CustomSwitch";
import Layout from "@/components/Layout";

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
