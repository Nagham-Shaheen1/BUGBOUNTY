import {
  AppShell,
  Container,
  Button,
  Group,
  Image,
  Tabs,
  Flex,
  Burger,
  Box,
} from "@mantine/core";
import "../../assets/css/infoNav.css";
import vector from "../../assets/vectors/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import notification from "../../assets/vectors/Vector (7).png";
import { useTranslation } from "react-i18next";
import DrawerNav from "./Drawer";
import { useDisclosure } from "@mantine/hooks";
import { LanguagePicker } from "./languageSwitcherMantine";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const company = JSON.parse(localStorage.getItem("company"));
  const comImg = company && company.data.company.logo;

  const researcher = JSON.parse(localStorage.getItem("researcher"));
  const resImg = researcher && researcher.data.researcher.image;

  let image = null;
  if (comImg) {
    image = comImg;
  } else {
    image = resImg;
  }

  return (
    <>
    {(location.pathname !== '/BugBountySyria/login' &&
       location.pathname !== '/BugBountySyria/' && 
       location.pathname !== '/BugBountySyria/resetpassword' &&
       location.pathname !== '/BugBountySyria/checkcode' &&
       location.pathname !== '/BugBountySyria/changePassword' &&
       location.pathname !== '/BugBountySyria/checkcoderegister' &&
       location.pathname !=='/BugBountySyria/not-found' &&
       location.pathname !=='/BugBountySyria/server-error' &&
       location.pathname !=='/BugBountySyria/unauthorized' && 
       location.pathname !== '/BugBountySyria/network-error') ? (
      <>
      <DrawerNav opened={opened} close={close} />
      <AppShell navbar={{ width: "100%", breakpoint: "sm" }}>
        <AppShell.Navbar
          px="md"
          bg="#F9F9F9"
          p={0}
          h="auto"
          style={{
            paddingInline: 0,
            position: "absolute",
            width:'100%',
            top: 0,
            right: 0,
            boxShadow: "0 1px 3px 0 #000",
          }}
        >
          <Flex justify="space-between" align="center">
            <Burger size="md" lineSize={2} hiddenFrom="md" onClick={open} />
            <Link to="/BugBountySyria/home">
              <Image src={vector} w={90} p={5} hiddenFrom="md" />
            </Link>
          </Flex>
          <Container
            visibleFrom="md"
            fluid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              boxSizing: "border-box",
              boxShadow: "0 3px 10px 0 #000",
            }}
          >
            {location.pathname === "/BugBountySyria/" ||
            location.pathname === "/BugBountySyria/login"  ? (
              <Group>
                <Button
                radius={8}
                  variant="outline"
                  color="#B21222"
                  size="md"
                  onClick={() => {
                    navigate("/BugBountySyria/login");
                  }}
                >
                  {t("دخول")}
                </Button>
                <Button
                radius={8}
                  variant="filled"
                  color="#B21222"
                  size="md"
                  onClick={() => {
                    navigate("/BugBountySyria/");
                  }}
                >
                  {t("سجل مجاناً")}
                </Button>
              </Group>
            ) : (
              <>
                <Tabs w="100%" pr={60}>
                  <Tabs.List
                    className="tabs"
                    justify="space-between"
                    c="#B21222"
                    style={{ borderRadius: "0 0 25px 25px", gap: 25 }}
                  >
                    <Group gap={0}>
                      <Tabs.Tab
                        className="group"
                        value="profile"
                        fz={18}
                        fw={700}
                        onClick={() => navigate("/BugBountySyria/profile")}
                      >
                        <Image
                          src={image}
                          radius="50%"
                          w={33}
                          h={33}
                          style={{
                            cursor: "pointer",
                            border: "1px solid red",
                          }}
                        />
                      </Tabs.Tab>
                      <Tabs.Tab
                        className="group"
                        value="notification"
                        fz={18}
                        fw={700}
                      >
                        <Image
                          src={notification}
                          w={20}
                          style={{ cursor: "pointer" }}
                        />
                      </Tabs.Tab>
                    </Group>
                    <Group>
                      <Tabs.Tab
                        className="button"
                        value="bugs"
                        fz={21}
                        fw={700}
                        onClick={() => navigate("/BugBountySyria/gabs")}
                      >
                        {t("الثغرات المكتشفة")}
                      </Tabs.Tab>
                      <Tabs.Tab
                        className="button"
                        value="securityInfo"
                        fz={21}
                        fw={700}
                        onClick={() => navigate("/BugBountySyria/home")}
                      >
                        {t("الصفحة الرئيسية")}
                      </Tabs.Tab>
                    </Group>
                  </Tabs.List>
                </Tabs>
              </>
            )}
            <Flex align="center" gap={30}>
              {/* <LanguageSwitcher /> */}
              <LanguagePicker />
              <Link to="/BugBountySyria/home">
                <Image src={vector} width={100} p={10} />
              </Link>
            </Flex>
          </Container>
        </AppShell.Navbar>
      </AppShell>
      
    </>
    ):(
      <Box style={{position:'absolute',right:20,top:20}}>
        {(location.pathname !== '/BugBountySyria/not-found' &&
         location.pathname !== '/BugBountySyria/server-error' &&
         location.pathname !=='/BugBountySyria/unauthorized' && 
         location.pathname !== '/BugBountySyria/network-error') &&
          (
        <LanguagePicker />
      )}
      </Box>
      
    )}
    </>
  );
};
export default Navbar;
