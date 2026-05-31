import { useState } from "react";

interface HeaderProps {
  onBack: () => void;
  activeMenu?: string | null;
  setActiveMenu?: (menu: string | null) => void;
}

export default function Header({
  onBack,
  activeMenu: controlledMenu,
  setActiveMenu: controlledSetMenu,
}: HeaderProps) {
  const [internalMenu, setInternalMenu] = useState<string | null>(null);
  const [aboutHovered, setAboutHovered] = useState(false);

  const activeMenu =
    controlledMenu !== undefined
      ? controlledMenu
      : internalMenu;

  const setActiveMenu =
    controlledSetMenu !== undefined
      ? controlledSetMenu
      : setInternalMenu;

  return (
    <>
      <style>{`
        @keyframes fadeInInner {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div
        onMouseLeave={() => {
          setActiveMenu(null);
          setAboutHovered(false);
        }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "100%",
            background: "#000000",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          {/* Home */}
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "25px",
              height: "25px",
            }}
          >
            🏠
          </button>

          {/* Folder */}
          <div
            onMouseEnter={() => {
              setActiveMenu("folder");
              setAboutHovered(false);
            }}
          >
            📁
          </div>

          {/* User */}
          <div
            onMouseEnter={() => {
              setActiveMenu("user");
            }}
          >
            👤
          </div>
        </div>

        {/* Drawer */}
        <div
          style={{
            background: "#000",
            overflow: "hidden",
            maxHeight: activeMenu ? "240px" : "0px",
            transition: "0.4s",
          }}
        >
          {/* Folder Menu */}
          {activeMenu === "folder" && (
            <div
              style={{
                padding: "30px",
                color: "#fff",
              }}
            >
              <div>PROFESSIONAL WORK ↗</div>
              <div>PERSONAL GALLERY ↗</div>
            </div>
          )}

          {/* User Menu */}
          {activeMenu === "user" && (
            <div
              style={{
                padding: "30px",
                color: "#fff",
              }}
            >
              <div
                onMouseEnter={() => setAboutHovered(true)}
                onMouseLeave={() => setAboutHovered(false)}
                style={{
                  width: aboutHovered ? "280px" : "54px",
                  height: aboutHovered ? "65px" : "54px",
                  borderRadius: aboutHovered ? "4px" : "50%",
                  overflow: "hidden",
                  transition: "0.4s",
                  background: "#111",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://i.ibb.co/8L2Sdt5Q/17.png"
                  alt="User"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {aboutHovered && (
                  <span
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "22px",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    ABOUT →
                  </span>
                )}
              </div>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ccc",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  📎 EXPERIENCE
                </button>

                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ccc",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ∞ MY MANTRA
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}