/* @ds-bundle: {"format":4,"namespace":"TsuinAiDesignSystem_e97952","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarImage","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarFallback","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"TableHeader","sourcePath":"components/data/Table.jsx"},{"name":"TableBody","sourcePath":"components/data/Table.jsx"},{"name":"TableRow","sourcePath":"components/data/Table.jsx"},{"name":"TableHead","sourcePath":"components/data/Table.jsx"},{"name":"TableCell","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"DialogHeader","sourcePath":"components/feedback/Dialog.jsx"},{"name":"DialogTitle","sourcePath":"components/feedback/Dialog.jsx"},{"name":"DialogDescription","sourcePath":"components/feedback/Dialog.jsx"},{"name":"DialogFooter","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SelectItem","sourcePath":"components/forms/Select.jsx"},{"name":"SelectLabel","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsTrigger","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ThemeToggle","sourcePath":"components/navigation/ThemeToggle.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9bfca51dab1d","components/core/Badge.jsx":"1de9c58ecce9","components/core/Button.jsx":"b33888dee8e2","components/core/Card.jsx":"a1930e3cdc0a","components/core/Separator.jsx":"77b09073ce6a","components/data/Table.jsx":"f7e320a27c4d","components/feedback/Alert.jsx":"7098a526a27a","components/feedback/Dialog.jsx":"b8e6dc715cd1","components/feedback/Tooltip.jsx":"08fa65995aa1","components/forms/Checkbox.jsx":"6bae40e10237","components/forms/Input.jsx":"ac8a304a7e47","components/forms/Label.jsx":"4610facd6238","components/forms/Select.jsx":"f782727cde10","components/forms/Switch.jsx":"5978ffa2659c","components/navigation/Tabs.jsx":"ddbf727e9897","components/navigation/ThemeToggle.jsx":"00805196039e","slides/Slides.jsx":"093b9ee7681a","ui_kits/docs/DocsPages.jsx":"76cf2f1ca7e3","ui_kits/docs/DocsShell.jsx":"e2ecb0b196aa","ui_kits/icon.jsx":"445546fd8ac2","ui_kits/website/Home.jsx":"0a2e10e4ce64","ui_kits/website/Manifesto.jsx":"3bb994d6e404","ui_kits/website/Pricing.jsx":"2fb5e999fd27","ui_kits/website/Research.jsx":"9ad4cb278400","ui_kits/website/Site.jsx":"4c3e3cc50894"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TsuinAiDesignSystem_e97952 = window.TsuinAiDesignSystem_e97952 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  size = 40,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexShrink: 0,
      overflow: "hidden",
      borderRadius: "var(--radius-full)",
      height: size,
      width: size,
      ...style
    }
  }, rest), children);
}
function AvatarImage({
  style,
  alt = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    alt: alt,
    style: {
      aspectRatio: "1 / 1",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      ...style
    }
  }, rest));
}
function AvatarFallback({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      background: "var(--muted)",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarImage, AvatarFallback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    borderColor: "transparent",
    boxShadow: "var(--shadow-sm)"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    borderColor: "transparent"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
    borderColor: "transparent",
    boxShadow: "var(--shadow-sm)"
  },
  outline: {
    background: "transparent",
    color: "var(--foreground)",
    borderColor: "var(--border)"
  },
  success: {
    background: "color-mix(in srgb, var(--success) 20%, transparent)",
    color: "var(--success)",
    borderColor: "transparent"
  },
  warning: {
    background: "color-mix(in srgb, var(--warning) 20%, transparent)",
    color: "var(--warning)",
    borderColor: "transparent"
  }
};
function Badge({
  variant = "default",
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "var(--radius-md)",
      borderWidth: 1,
      borderStyle: "solid",
      padding: "2px 10px",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      transition: "var(--transition-colors)",
      ...tones[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    border: "1px solid transparent"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
    border: "1px solid transparent"
  },
  outline: {
    background: "var(--background)",
    color: "var(--foreground)",
    border: "1px solid var(--input)"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    border: "1px solid transparent"
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid transparent"
  },
  link: {
    background: "transparent",
    color: "var(--primary)",
    border: "1px solid transparent",
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  }
};
const sizes = {
  default: {
    height: 36,
    padding: "8px 16px",
    fontSize: 14
  },
  sm: {
    height: 32,
    padding: "0 12px",
    fontSize: 12
  },
  lg: {
    height: 40,
    padding: "0 32px",
    fontSize: 14
  },
  icon: {
    height: 36,
    width: 36,
    padding: 0,
    fontSize: 14
  }
};
function Button({
  variant = "default",
  size = "default",
  disabled,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-twin)",
      fontWeight: 500,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-colors), opacity var(--duration) var(--ease)",
      opacity: disabled ? 0.5 : hover && variant !== "link" ? 0.9 : 1,
      ...v,
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  radius = "lg",
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius === "xl" ? "var(--radius-xl)" : "var(--radius-lg)",
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--card-foreground)",
      boxShadow: "var(--shadow-sm)",
      fontFamily: "var(--font-twin)",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 24,
      ...style
    }
  }, rest), children);
}
function CardTitle({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-twin)",
      fontWeight: 600,
      fontSize: "var(--twin-h3)",
      lineHeight: 1.4,
      letterSpacing: "var(--tracking-twin)",
      ...style
    }
  }, rest), children);
}
function CardDescription({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      ...style
    }
  }, rest), children);
}
function CardContent({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "0 24px 24px",
      ...style
    }
  }, rest), children);
}
function CardFooter({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 24px 24px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Separator({
  orientation = "horizontal",
  decorative = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: decorative ? "none" : "separator",
    "aria-orientation": orientation,
    style: {
      flexShrink: 0,
      background: "var(--border)",
      height: orientation === "horizontal" ? 1 : "100%",
      width: orientation === "horizontal" ? "100%" : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: "100%",
      borderCollapse: "collapse",
      captionSide: "bottom",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-body)",
      ...style
    }
  }, rest), children));
}
function TableHeader({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("thead", rest, children);
}
function TableBody({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tbody", rest, children);
}
function TableRow({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({
    style: {
      borderBottom: "1px solid var(--border)",
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest), children);
}
function TableHead({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    style: {
      height: 40,
      padding: "0 16px",
      textAlign: "left",
      verticalAlign: "middle",
      fontWeight: 500,
      color: "var(--muted-foreground)",
      ...style
    }
  }, rest), children);
}
function TableCell({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    style: {
      padding: 16,
      verticalAlign: "middle",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableRow, TableHead, TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  default: {
    background: "var(--background)",
    color: "var(--foreground)",
    borderColor: "var(--border)"
  },
  destructive: {
    background: "transparent",
    color: "var(--destructive)",
    borderColor: "color-mix(in srgb, var(--destructive) 50%, transparent)"
  },
  success: {
    background: "color-mix(in srgb, var(--success) 10%, transparent)",
    color: "var(--success)",
    borderColor: "color-mix(in srgb, var(--success) 50%, transparent)"
  },
  warning: {
    background: "color-mix(in srgb, var(--warning) 10%, transparent)",
    color: "var(--warning)",
    borderColor: "color-mix(in srgb, var(--warning) 50%, transparent)"
  },
  info: {
    background: "color-mix(in srgb, var(--primary) 10%, transparent)",
    color: "var(--primary)",
    borderColor: "color-mix(in srgb, var(--primary) 50%, transparent)"
  }
};
function Alert({
  variant = "default",
  icon,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      position: "relative",
      width: "100%",
      borderRadius: "var(--radius-lg)",
      borderWidth: 1,
      borderStyle: "solid",
      padding: "12px 16px",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-body)",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      ...tones[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, children));
}
function AlertTitle({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h5", _extends({
    style: {
      margin: "0 0 4px",
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      ...style
    }
  }, rest), children);
}
function AlertDescription({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-relaxed)",
      opacity: 0.9,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  onOpenChange,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenChange && onOpenChange(false),
    style: {
      position: "absolute",
      inset: 0,
      background: "rgb(0 0 0 / 0.6)",
      backdropFilter: "blur(4px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      display: "grid",
      gap: 16,
      width: "100%",
      maxWidth: 512,
      padding: 24,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--background)",
      color: "var(--foreground)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-mono)"
    }
  }, children, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => onOpenChange && onOpenChange(false),
    style: {
      position: "absolute",
      right: 16,
      top: 16,
      display: "flex",
      padding: 2,
      border: "none",
      background: "transparent",
      color: "inherit",
      opacity: 0.7,
      borderRadius: "var(--radius-sm)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))));
}
function DialogHeader({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), children);
}
function DialogTitle({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-human)",
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-tight)",
      ...style
    }
  }, rest), children);
}
function DialogDescription({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      ...style
    }
  }, rest), children);
}
function DialogFooter({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const sides = {
  top: {
    bottom: "calc(100% + 4px)",
    left: "50%",
    transform: "translateX(-50%)"
  },
  bottom: {
    top: "calc(100% + 4px)",
    left: "50%",
    transform: "translateX(-50%)"
  },
  left: {
    right: "calc(100% + 4px)",
    top: "50%",
    transform: "translateY(-50%)"
  },
  right: {
    left: "calc(100% + 4px)",
    top: "50%",
    transform: "translateY(-50%)"
  }
};
function Tooltip({
  content,
  side = "top",
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      whiteSpace: "nowrap",
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      background: "var(--foreground)",
      color: "var(--background)",
      padding: "6px 12px",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-label)",
      ...sides[side]
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": isOn,
    disabled: disabled,
    onClick: () => {
      if (disabled) return;
      if (checked === undefined) setInternal(!isOn);
      onCheckedChange && onCheckedChange(!isOn);
    },
    style: {
      height: 16,
      width: 16,
      flexShrink: 0,
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--primary)",
      boxShadow: "var(--shadow-sm)",
      background: isOn ? "var(--primary)" : "transparent",
      color: "var(--primary-foreground)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest), isOn && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  style,
  disabled,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      display: "flex",
      height: 36,
      width: "100%",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--input)",
      background: "transparent",
      padding: "4px 12px",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-body)",
      color: "var(--foreground)",
      boxShadow: "var(--shadow-sm)",
      transition: "var(--transition-colors)",
      outline: focus ? "2px solid var(--ring)" : "none",
      outlineOffset: focus ? 1 : 0,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      lineHeight: 1,
      color: "var(--foreground)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const Ctx = React.createContext(null);
function Select({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select...",
  disabled,
  children,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const current = value === undefined ? internal : value;
  const items = React.Children.toArray(children);
  const match = items.find(c => c.props && c.props.value === current);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-twin)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(!open),
    style: {
      display: "flex",
      height: 36,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--input)",
      background: "transparent",
      padding: "8px 12px",
      fontFamily: "inherit",
      fontSize: "var(--text-body)",
      color: current ? "var(--foreground)" : "var(--muted-foreground)",
      boxShadow: "var(--shadow-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", null, match ? match.props.children : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: {
      current,
      choose: v => {
        if (value === undefined) setInternal(v);
        onValueChange && onValueChange(v);
        setOpen(false);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 50,
      top: "calc(100% + 4px)",
      left: 0,
      minWidth: "100%",
      maxHeight: 384,
      overflow: "auto",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border)",
      background: "var(--popover)",
      color: "var(--popover-foreground)",
      boxShadow: "var(--shadow-md)",
      padding: 4
    }
  }, children)));
}
function SelectItem({
  value,
  disabled,
  children
}) {
  const ctx = React.useContext(Ctx);
  const [hover, setHover] = React.useState(false);
  if (!ctx) return null;
  const selected = ctx.current === value;
  return /*#__PURE__*/React.createElement("div", {
    role: "option",
    "aria-selected": selected,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => !disabled && ctx.choose(value),
    style: {
      position: "relative",
      display: "flex",
      width: "100%",
      alignItems: "center",
      borderRadius: "var(--radius-sm)",
      padding: "6px 32px 6px 8px",
      fontSize: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "default",
      opacity: disabled ? 0.5 : 1,
      background: hover ? "color-mix(in srgb, var(--accent) 20%, transparent)" : "transparent",
      color: hover ? "var(--accent)" : "inherit"
    }
  }, children, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 8,
      display: "flex",
      height: 14,
      width: 14,
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))));
}
function SelectLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 8px",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      color: "var(--muted-foreground)"
    }
  }, children);
}
Object.assign(__ds_scope, { Select, SelectItem, SelectLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": isOn,
    disabled: disabled,
    onClick: () => {
      if (disabled) return;
      if (checked === undefined) setInternal(!isOn);
      onCheckedChange && onCheckedChange(!isOn);
    },
    style: {
      display: "inline-flex",
      height: 20,
      width: 36,
      flexShrink: 0,
      alignItems: "center",
      borderRadius: "var(--radius-full)",
      border: "2px solid transparent",
      padding: 0,
      background: isOn ? "var(--primary)" : "var(--input)",
      boxShadow: "var(--shadow-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 16,
      width: 16,
      borderRadius: "var(--radius-full)",
      background: "var(--background)",
      boxShadow: "var(--shadow-lg)",
      transform: "translateX(" + (isOn ? 16 : 0) + "px)",
      transition: "transform var(--duration) var(--ease)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Ctx = React.createContext(null);
function Tabs({
  value,
  defaultValue,
  onValueChange,
  style,
  children
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value === undefined ? internal : value;
  return /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: {
      current,
      set: v => {
        if (value === undefined) setInternal(v);
        onValueChange && onValueChange(v);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-twin)",
      ...style
    }
  }, children));
}
function TabsList({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      height: 36,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-lg)",
      background: "var(--muted)",
      padding: 4,
      color: "var(--muted-foreground)",
      ...style
    }
  }, rest), children);
}
function TabsTrigger({
  value,
  style,
  children,
  ...rest
}) {
  const ctx = React.useContext(Ctx);
  const active = ctx && ctx.current === value;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": !!active,
    onClick: () => ctx && ctx.set(value),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-md)",
      border: "none",
      padding: "4px 12px",
      fontFamily: "inherit",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      cursor: "pointer",
      background: active ? "var(--background)" : "transparent",
      color: active ? "var(--foreground)" : "inherit",
      boxShadow: active ? "var(--shadow)" : "none",
      transition: "all var(--duration) var(--ease)",
      ...style
    }
  }, rest), children);
}
function TabsContent({
  value,
  style,
  children,
  ...rest
}) {
  const ctx = React.useContext(Ctx);
  if (!ctx || ctx.current !== value) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    style: {
      marginTop: 8,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsTrigger, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ThemeToggle.jsx
try { (() => {
const HEADS = {
  light: "shibasuke-human-head.png",
  dark: "shibasuke-twin-head.png"
};

/* Human = light. Twin = dark. The typography says who is speaking:
   Human in Lora, Twin in Martian Mono. */
function ThemeToggle({
  theme = "light",
  onToggle,
  assetBase = "assets/illustrations",
  floating = true,
  mode
}) {
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    if (mode || typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 720px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [mode]);
  const shape = mode || (narrow ? "head" : "pill");
  const isHuman = theme === "light";
  const next = isHuman ? "twin" : "human";
  const shell = {
    position: floating ? "fixed" : "relative",
    zIndex: 60,
    ...(floating && shape === "pill" ? {
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)"
    } : {}),
    ...(floating && shape === "head" ? {
      bottom: 20,
      right: 20
    } : {})
  };
  if (shape === "head") {
    return /*#__PURE__*/React.createElement("div", {
      style: shell
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onToggle,
      "aria-label": `Switch to ${next} — ${isHuman ? "dark" : "light"} mode`,
      style: {
        width: 64,
        height: 64,
        padding: 0,
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "block",
        transition: "transform 160ms ease"
      },
      onMouseDown: e => {
        e.currentTarget.style.transform = "scale(0.94)";
      },
      onMouseUp: e => {
        e.currentTarget.style.transform = "scale(1)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = "scale(1)";
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${assetBase}/${HEADS[theme]}`,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block"
      }
    })));
  }
  const seg = active => ({
    position: "relative",
    zIndex: 1,
    height: 38,
    padding: "0 20px",
    border: 0,
    borderRadius: "var(--radius-full)",
    background: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    color: active ? "var(--toggle-shell)" : "var(--toggle-shell-fg)",
    transition: "color 200ms ease"
  });
  const dot = (active, who) => ({
    width: 8,
    height: 8,
    borderRadius: "var(--radius-full)",
    flexShrink: 0,
    background: active ? who === "human" ? "var(--human-bright)" : "var(--twin-bright)" : "var(--toggle-shell-fg)",
    opacity: active ? 1 : 0.55
  });
  return /*#__PURE__*/React.createElement("div", {
    style: shell
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Human or Twin",
    style: {
      position: "relative",
      display: "inline-flex",
      padding: 5,
      borderRadius: "var(--radius-full)",
      background: "var(--toggle-shell)",
      boxShadow: "var(--shadow-desk-lg)",
      border: "1px solid rgba(255,255,255,0.07)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 5,
      bottom: 5,
      left: 5,
      width: "calc(50% - 5px)",
      borderRadius: "var(--radius-full)",
      background: "var(--toggle-thumb)",
      transform: isHuman ? "translateX(0)" : "translateX(100%)",
      transition: "transform 260ms cubic-bezier(.2,.8,.3,1)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: isHuman ? undefined : onToggle,
    "aria-pressed": isHuman,
    style: seg(isHuman)
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(isHuman, "human")
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1
    }
  }, "Human")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: isHuman ? onToggle : undefined,
    "aria-pressed": !isHuman,
    style: seg(!isHuman)
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(!isHuman, "twin")
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "var(--tracking-twin)",
      lineHeight: 1
    }
  }, "Twin"))));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
/* Slide specimens — content verbatim from "RamenTech [Tsuin.ai] Pitch deck - Aug 2026".
   Layouts are built on this design system's foundations, not on the source deck's template. */
const A = "../assets/illustrations/";
const K = "../assets/artifacts/";
const deckMicro = {
  fontFamily: "var(--font-twin)",
  fontSize: "var(--twin-micro)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-widest)"
};
const deckLead = {
  fontFamily: "var(--font-human)",
  lineHeight: 1.15,
  letterSpacing: "var(--tracking-tight)",
  margin: 0
};
function Frame({
  section,
  children,
  dark,
  mark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? "dark" : undefined,
    style: {
      position: "relative",
      width: 1280,
      height: 720,
      background: "var(--paper)",
      color: "var(--ink)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-paper)",
      opacity: "var(--texture-paper-opacity)",
      mixBlendMode: "var(--texture-paper-blend)"
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "34px 56px 0",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...deckMicro,
      color: "var(--ink-muted)"
    }
  }, "Presented by Audrey Aui Yong"), section ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...deckMicro,
      color: "var(--human-ink)"
    }
  }, section) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      padding: "0 56px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, children), mark ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 56px 30px",
      ...deckMicro,
      color: "var(--ink-muted)",
      letterSpacing: "0.16em"
    }
  }, "\u30C4\u30A4\u30F3.AI") : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30
    }
  }));
}
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    mark: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/tsuin-black-horizontal-full.png",
    alt: "tsuin.ai",
    style: {
      height: 40,
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...deckLead,
      fontSize: 62,
      fontWeight: 600
    }
  }, "Own your", /*#__PURE__*/React.createElement("br", null), "intelligence"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 23,
      lineHeight: 1.4,
      color: "var(--ink-2)",
      margin: "18px 0 0",
      maxWidth: 460
    }
  }, "with Cognitive AI Twin", /*#__PURE__*/React.createElement("br", null), "to eliminate organizational knowledge loss."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      borderTop: "1px solid var(--rule)",
      paddingTop: 16,
      display: "grid",
      gap: 5,
      ...deckMicro,
      color: "var(--ink-muted)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wide)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Company: Tsuin AI Sdn Bhd"), /*#__PURE__*/React.createElement("div", null, "Product: Cognitive AI Twin"), /*#__PURE__*/React.createElement("div", null, "Presenter: Audrey Aui Yong"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 520,
      flexShrink: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-scene-fuji-desk.png",
    alt: "Shibasuke at the desk with his twin on screen",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: K + "stamp-shibasuke-1-0.png",
    alt: "\u30B7\u30D0\u30B9\u30B1 1.0 stamp",
    style: {
      position: "absolute",
      top: -18,
      right: -14,
      width: 116,
      transform: "rotate(4deg)",
      filter: "drop-shadow(var(--shadow-desk-sm))"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      borderTop: "1px solid var(--rule)",
      paddingTop: 14,
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...deckMicro,
      color: "var(--twin-ink)",
      flexShrink: 0,
      paddingTop: 2
    }
  }, "Company purpose"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.8,
      color: "var(--ink-muted)",
      margin: 0
    }
  }, "tsuin.ai build Cognitive AI Twin to end human tacit knowledge loss by capturing a person's reasoning upstream, ensuring a company's organizational knowledge never lost.")));
}
function ProblemSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Problem"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-display)",
      fontWeight: 600
    }
  }, "Organizational", /*#__PURE__*/React.createElement("br", null), "Knowledge Loss"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-lead)",
      lineHeight: 1.5,
      color: "var(--ink-2)",
      margin: "20px 0 0",
      maxWidth: 560
    }
  }, "Companies invest heavily in employees and AI, but the knowledge stays trapped in the individual employee's head."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 34,
      alignItems: "flex-end",
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      background: "var(--paper-2)",
      boxShadow: "var(--shadow-desk)",
      padding: "22px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--ink-muted)"
    }
  }, "When an employee leaves the team\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 46,
      fontWeight: 600,
      lineHeight: 1.05,
      marginTop: 10
    }
  }, "Up to 12 months"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 22,
      color: "var(--ink-2)"
    }
  }, "loss productivity")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderLeft: "var(--spec-hairline)",
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--twin-ink)"
    }
  }, "The Judgement Gap"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.8,
      color: "var(--ink-muted)",
      margin: "8px 0 0"
    }
  }, "Current AI tools and memory layers function as static archives. They can retrieve what happened in the past, but they cannot model how your best people think and reason forward."))), /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-scene-exit.png",
    alt: "The shiba walking out through an EXIT door",
    style: {
      width: 300,
      flexShrink: 0
    }
  })));
}
const SOLUTION = [["Instant Knowledge Transfer", "New hires get immediate access to the former employee's expertise, skipping months of onboarding and training."], ["Zero Downtime", "No delay because the Twin can explain past decisions and step in to handle routine tasks immediately."], ["Contextual Guidance", "Team learn why a specific approach was chosen, preventing them from repeating old mistakes."]];
function SolutionSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Solution"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-h1)",
      fontWeight: 600
    }
  }, "Cognitive AI Twin"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--ink-2)",
      margin: "10px 0 24px",
      maxWidth: 420
    }
  }, "a personal digital clone that captures your thinking and continuously learn from you to become more like you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, SOLUTION.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--human-ink)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "var(--twin-label)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.75,
      color: "var(--ink-muted)",
      margin: "6px 0 0"
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-human-full.png",
    alt: "",
    style: {
      width: 52,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-2)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-2xl)",
      borderTopLeftRadius: "var(--radius-sm)",
      padding: "14px 18px",
      boxShadow: "var(--shadow-desk-sm)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 21,
      fontWeight: 600,
      lineHeight: 1.25,
      margin: 0
    }
  }, "Why Kanta change the code here?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      flexDirection: "row-reverse"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-twin-full.png",
    alt: "",
    style: {
      width: 52,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--twin-wash)",
      border: "var(--spec-hairline)",
      borderRadius: "var(--radius-2xl)",
      borderTopRightRadius: "var(--radius-sm)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--twin-ink)",
      marginBottom: 6
    }
  }, "\u30B7\u30D0\u30B9\u30B1 1.0"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-body)",
      lineHeight: 1.7,
      margin: 0
    }
  }, "Kanta was working on the TwinAdapterServer, its hot-swap capability."))))));
}
const MARKET = [["$1.5T", "global annual IT budget spent on Tech Debt in the US market alone"], ["$5.1B", "target 1.8M developers already paying for AI coding tools"], ["$110M", "engineering teams maintaining complex existing systems"]];
function MarketSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Market Opportunity"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-h1)",
      fontWeight: 600,
      maxWidth: 640
    }
  }, "Engineering teams maintaining complex existing systems"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 40
    }
  }, MARKET.map(([n, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderTop: "2px solid var(--human)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 64,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)"
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.75,
      color: "var(--ink-muted)",
      margin: "12px 0 0"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      borderTop: "1px solid var(--rule)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      margin: 0,
      lineHeight: 1.7
    }
  }, "We have validated with Buyers: CIO, CTO, VP Engineering, Head of IT", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.75
    }
  }, "Source: CISQ, The Cost of Poor Software Quality in the US: A 2022 Report")), /*#__PURE__*/React.createElement("img", {
    src: A + "monitor-isometric.png",
    alt: "",
    style: {
      height: 92
    }
  })));
}
function CompetitionSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Competition"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-h2)",
      fontWeight: 600
    }
  }, "Comparing Existing AI Models to tsuin.ai Twin model"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "stretch",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      background: "var(--paper-2)",
      padding: 26,
      boxShadow: "var(--shadow-desk-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--ink-muted)"
    }
  }, "One-to-many"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.25,
      margin: "10px 0 0"
    }
  }, "Generalized AI models are one-to-many"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 7
    }
  }, Array.from({
    length: 18
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 12,
      borderRadius: 2,
      background: "color-mix(in srgb, var(--ink-muted) 22%, transparent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center",
      ...deckMicro,
      fontSize: 15,
      color: "var(--human-ink)"
    }
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      border: "var(--spec-hairline)",
      borderRadius: "var(--radius-xl)",
      background: "var(--twin-wash)",
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--twin-ink)"
    }
  }, "One-to-one"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.25,
      margin: "10px 0 0"
    }
  }, "Tsuin.ai Cognitive AI Twin model"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.75,
      color: "var(--ink-muted)",
      margin: "10px 0 0"
    }
  }, "are deployed one-to-one to each individual users to capture user's logic and fine-tuned into each model."))), /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-scene-highfive.png",
    alt: "The ochre shiba and his circuit-lit twin high-fiving over a neural net",
    style: {
      width: 380,
      alignSelf: "center",
      marginTop: 8
    }
  }));
}
const TIERS = [["Solo", "$500", "one time payment", "run locally on user's machine", false], ["Team", "$200/mo/seat", "team collaboration up to 5 AI Twins", "for team collaboration", true], ["Enterprise", "Contact Us", "more than 5 AI Twins", "run locally or in the cloud", false]];
function BusinessModelSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Business Model"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-h1)",
      fontWeight: 600
    }
  }, "Run locally or in the cloud"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22,
      marginTop: 34
    }
  }, TIERS.map(([name, price, sub, foot, feature]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      position: "relative",
      padding: 24,
      borderRadius: "var(--radius-sm)",
      background: feature ? "var(--twin-wash)" : "var(--paper-2)",
      border: feature ? "var(--spec-hairline)" : "1px solid var(--rule)",
      boxShadow: "var(--shadow-desk)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 6,
      border: "1px dashed color-mix(in srgb, var(--ink-muted) 35%, transparent)",
      borderRadius: 2,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: feature ? "var(--twin-ink)" : "var(--human-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 38,
      fontWeight: 600,
      lineHeight: 1.1,
      marginTop: 12
    }
  }, price), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.7,
      color: "var(--ink-2)",
      margin: "8px 0 0"
    }
  }, sub), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.7,
      color: "var(--ink-muted)",
      margin: "16px 0 0",
      paddingTop: 12,
      borderTop: "1px solid var(--rule)"
    }
  }, foot)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: K + "boxart-twin-model.png",
    alt: "Twin model shipping box",
    style: {
      height: 130
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.3,
      margin: 0,
      maxWidth: 300
    }
  }, "You own your Twin model. It is never rented.")));
}
const ROADMAP = [["Continual Learning", "(we have this)", "First AI Research Milestone Completed in Feb 2026"], ["Recursive Self-Improvement", "(what we will work on next)", ""], ["AGI", "(your personal AGI that you own and behaves like you)", ""]];
function RoadmapSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "AI Research Roadmap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "stretch",
      marginTop: 8
    }
  }, ROADMAP.map(([t, note, foot], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-full)",
      background: i === 0 ? "var(--human)" : "transparent",
      border: i === 0 ? "none" : "1px solid var(--rule)",
      color: "var(--paper)",
      ...deckMicro,
      display: "grid",
      placeItems: "center"
    }
  }, i === 0 ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--rule)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 30,
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "var(--tracking-tight)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.75,
      color: "var(--ink-muted)",
      margin: "12px 0 0"
    }
  }, note), foot ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.7,
      color: "var(--human-ink)",
      margin: "auto 0 0",
      paddingTop: 20
    }
  }, foot) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-scene-training.png",
    alt: "The twin at the desk in a \u5408\u683C headband",
    style: {
      width: 330
    }
  })));
}
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    section: "Thank you",
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/tsuin-white-horizontal-full.png",
    alt: "tsuin.ai",
    style: {
      height: 36,
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...deckLead,
      fontSize: "var(--human-display)",
      fontWeight: 600
    }
  }, "Train your twin."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "grid",
      gap: 8,
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-body)",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "au@tsuin.ai"), /*#__PURE__*/React.createElement("div", null, "+1 650 (334) 7332"), /*#__PURE__*/React.createElement("div", null, "+60 16 212 2013")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...deckMicro,
      color: "var(--twin-ink)",
      marginTop: 22
    }
  }, "Connect with us")), /*#__PURE__*/React.createElement("img", {
    src: A + "shibasuke-scene-highfive.png",
    alt: "The ochre shiba and his circuit-lit twin high-fiving",
    style: {
      width: 460,
      flexShrink: 0
    }
  })));
}
Object.assign(window, {
  Frame,
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  MarketSlide,
  CompetitionSlide,
  BusinessModelSlide,
  RoadmapSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsPages.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  AlertTitle,
  AlertDescription
} = window.TsuinAiDesignSystem_e97952;
const micro = {
  fontFamily: "var(--font-twin)",
  fontSize: "var(--twin-micro)",
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-widest)",
  fontWeight: 700,
  color: "var(--ink-muted)"
};
const PageTitle = ({
  children,
  sub
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-human)",
    fontSize: "var(--human-h1)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-tight)",
    lineHeight: "var(--leading-tight)",
    margin: "0 0 12px"
  }
}, children), sub && /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-human)",
    fontSize: "var(--human-lead)",
    color: "var(--ink-2)",
    maxWidth: 620,
    lineHeight: 1.55,
    margin: 0
  }
}, sub));

/* ---------------- Introduction: the system's own proof ---------------- */
function Intro() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary"
  }, "v0.2.0"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "React + CSS custom properties")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      background: "var(--paper-2)",
      boxShadow: "var(--shadow-desk)",
      marginBottom: 40,
      display: "flex",
      alignItems: "center",
      gap: 28,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-paper)",
      opacity: "var(--texture-paper-opacity)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-fuji-desk.png",
    alt: "Shibasuke at the desk with his twin on screen",
    style: {
      height: 260,
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--human-ink)"
    }
  }, "\u30B7\u30D0\u30B9\u30B1 1.0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1.1,
      margin: "12px 0 14px"
    }
  }, "Shibasuke", /*#__PURE__*/React.createElement("br", null), "Design System"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-lead)",
      color: "var(--ink-2)",
      lineHeight: 1.55,
      margin: 0,
      maxWidth: 420
    }
  }, "Two voices in every layout: the human and their twin. Everything here exists to keep that edge visible."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      marginTop: 14,
      lineHeight: 1.7,
      maxWidth: 420
    }
  }, "No neon. No glass. No stock photos. If it could ship on any AI startup's site with the logo swapped, it does not belong here."))), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "installation",
    title: "Installation"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-body)",
      color: "var(--ink-muted)",
      marginTop: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "One stylesheet. Every token comes with it."), /*#__PURE__*/React.createElement(CodeBlock, null, "# Clone\ngit clone <repo-url>\ncd shibasuke-design-system\n\n# Install\nnpm install\n\n# Start dev server\nnpm run dev")), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "quickstart",
    title: "Quick start"
  }, /*#__PURE__*/React.createElement(CodeBlock, null, 'import { Button } from "@/components/ui/button";\nimport { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";\n\nexport function Example() {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>Hello, Shibasuke</CardTitle>\n      </CardHeader>\n      <CardContent>\n        <Button>Train your twin</Button>\n      </CardContent>\n    </Card>\n  );\n}')), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "themes",
    title: "The two themes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [{
    title: "Solarized Light",
    desc: "Cream paper, ink text. Never pure white.",
    tokens: [["--paper", "#FDF6E3"], ["--ink", "#2E3436"], ["--human", "#207A73"], ["--twin", "#3F63CC"]]
  }, {
    title: "Tokyo Night Storm",
    desc: "The repo's own dark palette.",
    tokens: [["--paper", "#1A1B26"], ["--ink", "#C0CAF5"], ["--human", "#2AA198"], ["--twin", "#7AA2F7"]]
  }].map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.title
  }, /*#__PURE__*/React.createElement(CardHeader, {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(CardTitle, null, g.title), /*#__PURE__*/React.createElement(CardDescription, {
    style: {
      fontSize: "var(--twin-caption)"
    }
  }, g.desc)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, g.tokens.map(([n, v]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: "var(--twin-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "var(--radius-artifact)",
      background: v,
      border: "1px solid var(--rule)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("code", {
    style: {
      color: "var(--twin-ink)"
    }
  }, n), /*#__PURE__*/React.createElement("code", {
    style: {
      color: "var(--ink-muted)",
      marginLeft: "auto"
    }
  }, v))))))))));
}

/* ---------------- The Contrast ---------------- */
function Contrast() {
  const rows = [["Colour", "Teal", "Tokyo Night blue"], ["Type", "Lora", "Martian Mono"], ["Rendering", "Watercolour, paper, soft edges", "Spec-sheet: grids, labels, circuit line"], ["Shiba", "Ochre, painted, teal bandana", "Blue, circuit-lit, crisp"], ["Texture", "Paper grain, paint", "Clean grids, registration marks"], ["Words", "Story, warmth, the why", "Data, receipts, confidence, \"not yet\""]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "The brand is a human and their twin, so the visual system has two voices \u2014 always in contrast. Every meaningful layout shows both, because the product is both."
  }, "Rule 0 \u2014 The Contrast"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "registers",
    title: "The two registers"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 24,
      position: "relative",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-paper)",
      opacity: "var(--texture-paper-opacity)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--human-ink)",
      position: "relative"
    }
  }, "The human"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      fontFamily: "var(--font-human)",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "var(--tracking-tight)",
      margin: "12px 0 0"
    }
  }, "You know things you never wrote down."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-human-full.png",
    alt: "",
    style: {
      height: 150,
      position: "relative",
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 24,
      position: "relative",
      background: "var(--paper-2)",
      borderLeft: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--spec-grid)",
      backgroundSize: "var(--spec-grid-size)",
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--twin-ink)",
      position: "relative"
    }
  }, "The twin"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      fontSize: "var(--twin-body)",
      lineHeight: "var(--leading-relaxed)",
      margin: "14px 0 0",
      maxWidth: 260
    }
  }, "I don't have enough from you on this yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 14,
      display: "inline-block",
      border: "var(--spec-hairline)",
      padding: "6px 10px",
      ...micro,
      color: "var(--twin-ink)"
    }
  }, "RLPF \xB7 confidence low"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-twin-full.png",
    alt: "",
    style: {
      height: 150,
      position: "relative",
      marginTop: 6,
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement(Alert, {
    variant: "info"
  }, /*#__PURE__*/React.createElement(AlertTitle, null, "Never blend the registers into mush"), /*#__PURE__*/React.createElement(AlertDescription, null, "The point is the edge between them. A watercolour shiba inside a crisp spec-sheet frame is the brand in one image."))), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "table",
    title: "The table"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, {
    style: {
      background: "color-mix(in srgb, var(--paper-3) 60%, transparent)"
    }
  }, ["", "The human", "The twin"].map((h, i) => /*#__PURE__*/React.createElement(TableHead, {
    key: i,
    style: micro
  }, h)))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
    key: r[0]
  }, /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px",
      ...micro,
      color: "var(--ink-muted)"
    }
  }, r[0]), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px",
      fontSize: "var(--twin-caption)",
      color: "var(--human-ink)"
    }
  }, r[1]), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px",
      fontSize: "var(--twin-caption)",
      color: "var(--twin-ink)"
    }
  }, r[2]))))))));
}

/* ---------------- Typography ---------------- */
function TypographyDocs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "Who is speaking decides the font. Lora is the human voice; Martian Mono is the twin's. There is no third face \u2014 pixel type is reserved for gaming moments."
  }, "Typography"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "lora",
    title: "Lora \u2014 the human"
  }, /*#__PURE__*/React.createElement(ComponentPreview, {
    preview: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-human)",
        fontSize: 38,
        fontWeight: 600,
        letterSpacing: "var(--tracking-tight)",
        margin: 0,
        lineHeight: 1.1
      }
    }, "Train your twin."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-human)",
        fontSize: "var(--human-lead)",
        color: "var(--ink-2)",
        lineHeight: 1.6,
        margin: "12px 0 0",
        maxWidth: 520
      }
    }, "Emotional headlines, story and manifesto passages, and the human side of any dialogue.")),
    code: 'font-family: var(--font-human);   /* "Lora", Georgia, serif */\nfont-size: var(--human-h1);       /* 38px */\nfont-weight: 600;\nletter-spacing: var(--tracking-tight);'
  })), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "martian",
    title: "Martian Mono \u2014 the twin"
  }, /*#__PURE__*/React.createElement(ComponentPreview, {
    preview: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--twin-h3)",
        fontWeight: 600,
        margin: 0
      }
    }, "Cognitive AI Twin"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--twin-body)",
        color: "var(--ink-muted)",
        lineHeight: "var(--leading-relaxed)",
        margin: "10px 0 0",
        maxWidth: 520
      }
    }, "All UI, labels, data, spec sheets, system messages, technical docs. It runs wide \u2014 give it 1.7 line-height and sizes a step below a normal mono.")),
    code: 'font-family: var(--font-twin);    /* "Martian Mono", ui-monospace */\nfont-size: var(--twin-body);      /* 13px */\nline-height: var(--leading-relaxed);\nletter-spacing: var(--tracking-twin);'
  })), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "dialogue",
    title: "Dialogue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-end",
      maxWidth: "72%",
      background: "var(--human-wash)",
      border: "1px solid color-mix(in srgb, var(--human) 25%, transparent)",
      borderRadius: "var(--radius-xl) var(--radius-sm) var(--radius-xl) var(--radius-xl)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 18,
      lineHeight: 1.45,
      margin: 0
    }
  }, "Why did Kanta change the code here?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      textAlign: "right",
      margin: "8px 0 0"
    }
  }, "You")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      maxWidth: "76%",
      background: "var(--paper-2)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-sm) var(--radius-xl) var(--radius-xl) var(--radius-xl)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--twin-ink)",
      margin: "0 0 8px"
    }
  }, "\u30B7\u30D0\u30B9\u30B1 \xB7 your twin"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--ink-2)",
      margin: 0
    }
  }, "The retry wrapper looks redundant but it's load-bearing \u2014 the upstream API double-acks under load. You noted it in the Mar 2024 review.")))));
}

/* ---------------- Voice & Tone (Brand Strategy v2) ---------------- */
const VOICE = [{
  title: "Few words",
  body: "Say it and stop. If a sentence can be shorter without losing meaning, it should be.",
  avoid: "\"Revolutionising developer productivity with next-gen AI capabilities.\"",
  use: "\"Train your twin.\""
}, {
  title: "Flat honesty",
  body: "State what is true, including the limits. No hedging, no overselling.",
  avoid: "\"Tsuin never forgets anything.\"",
  use: "\"I don't have enough from you on this yet.\""
}, {
  title: "Receipts, not claims",
  body: "Specific numbers, dates and sources. Vague quantifiers are off-brand.",
  avoid: "\"Dramatically faster onboarding.\"",
  use: "\"400ms P99 at 50k req/s. You moved it in Feb 2024.\""
}, {
  title: "Deadpan on warm pictures",
  body: "Cozy watercolour plus flat words. The warmth makes the deadpan land.",
  avoid: "\"Oops! Something went wrong 😔\"",
  use: "\"We baked some cookies. Not the chocolate chip kind — sadly... lawyers insist.\""
}, {
  title: "Ownership, always",
  body: "You train it. You own it. Never frame the twin as a service you rent.",
  avoid: "\"Subscribe to your AI assistant.\"",
  use: "\"Solo: $500, one time. Runs on your machine.\""
}];
function VoiceDocs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "How tsuin speaks matters as much as how it looks. The line, inside and out, is: Train your twin."
  }, "Voice & Tone"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "attributes",
    title: "The five attributes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, VOICE.map((v, i) => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    radius: "xl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...micro,
      color: "var(--ink-muted)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 20,
      fontWeight: 600,
      margin: 0
    }
  }, v.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-body)",
      color: "var(--ink-muted)",
      lineHeight: "var(--leading-relaxed)",
      margin: "8px 0 0",
      paddingLeft: 34
    }
  }, v.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderRight: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--destructive)",
      margin: "0 0 6px"
    }
  }, "Never"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, v.avoid)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--twin-ink)",
      margin: "0 0 6px"
    }
  }, "Always"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 15,
      lineHeight: 1.5,
      margin: 0
    }
  }, v.use))))))), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "vocabulary",
    title: "Vocabulary"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--twin-ink)",
      margin: "0 0 10px"
    }
  }, "Current (v2)"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--twin-caption)",
      lineHeight: 1.6
    }
  }, [["Cognitive AI Twin", "the product — \"your personal AGI\""], ["personal digital clone", "the plain alternate"], ["RLPF", "the training loop"], ["logic capture", "the positioning axis"], ["Shibasuke", "the model line"], ["Train your twin.", "the line"]].map(([a, b]) => /*#__PURE__*/React.createElement("li", {
    key: a
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, a), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)"
    }
  }, "\u2014 ", b))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--destructive)",
      margin: "0 0 10px"
    }
  }, "Retired \u2014 kill on sight"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--twin-caption)",
      lineHeight: 1.6
    }
  }, [["Capture the Why", "old tagline"], ["save your thoughts", "memory framing"], ["never forgets", "fake certainty"], ["personal intelligence layer", "old positioning"], ["copilot / assistant", "wrong category"], ["hype adjectives", "revolutionary, seamless, next-gen"]].map(([a, b]) => /*#__PURE__*/React.createElement("li", {
    key: a
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "line-through",
      color: "var(--destructive)"
    }
  }, a), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)"
    }
  }, "\u2014 ", b))))))));
}

/* ---------------- Texture ---------------- */
function TextureDocs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "Texture over flatness. Flat vector is the fastest way to lose the taste \u2014 but dense data UI stays clean."
  }, "Texture"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "grain",
    title: "Paper grain"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      height: 150
    }
  }, [["--texture-paper @ 5.5%", "var(--paper)", "var(--texture-paper)", "var(--texture-paper-opacity)"], ["--texture-wash @ 8%", "var(--human-wash)", "var(--texture-wash)", "var(--texture-wash-opacity)"], ["no texture — data UI", "var(--paper-2)", "none", 0]].map(([label, bg, img, op]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      flex: 1,
      position: "relative",
      background: bg,
      display: "flex",
      alignItems: "flex-end",
      padding: 14,
      borderLeft: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: img,
      opacity: op,
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)"
    }
  }, label))))), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "shadows",
    title: "Desk shadows"
  }, /*#__PURE__*/React.createElement(StateShowcase, {
    columns: 4,
    items: [["sm", "var(--shadow-desk-sm)"], ["base", "var(--shadow-desk)"], ["lg", "var(--shadow-desk-lg)"], ["lift", "var(--shadow-desk-lift)"]].map(([n, v]) => ({
      label: n,
      element: /*#__PURE__*/React.createElement("div", {
        style: {
          width: 110,
          height: 60,
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--rule)",
          background: "var(--paper)",
          boxShadow: v
        }
      })
    }))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      marginTop: 12,
      lineHeight: 1.7
    }
  }, "Warm, soft, close \u2014 objects on a desk. No floating glass, no inner shadow, no glow.")), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "specgrid",
    title: "Spec-sheet grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      background: "var(--paper-2)",
      backgroundImage: "var(--spec-grid)",
      backgroundSize: "var(--spec-grid-size)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      border: "var(--spec-hairline)",
      background: "var(--paper)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--twin-ink)"
    }
  }, "\u30B7\u30D0\u30B9\u30B1 1.0 \xB7 spec"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--twin-caption)",
      marginTop: 8,
      lineHeight: 1.9
    }
  }, "trained_on: 4,182 decisions", /*#__PURE__*/React.createElement("br", null), "confidence: 0.71", /*#__PURE__*/React.createElement("br", null), "runs_on: your machine")))));
}

/* ---------------- Button ---------------- */
function ButtonDocs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "The only action control in the system. Teal is the human's register, so primary actions are teal; blue carries the twin's system voice."
  }, "Button"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "variants",
    title: "Variants"
  }, /*#__PURE__*/React.createElement(ComponentPreview, {
    preview: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, null, "Train your twin"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Watch the demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive"
    }, "Delete session"), /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "Read the manifesto")),
    code: '<Button>Train your twin</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Watch the demo</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="destructive">Delete session</Button>\n<Button variant="link">Read the manifesto</Button>'
  })), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "states",
    title: "Sizes & states"
  }, /*#__PURE__*/React.createElement(StateShowcase, {
    columns: 5,
    items: [{
      label: "sm · 32px",
      element: /*#__PURE__*/React.createElement(Button, {
        size: "sm"
      }, "Small")
    }, {
      label: "default · 36px",
      element: /*#__PURE__*/React.createElement(Button, null, "Default")
    }, {
      label: "lg · 40px",
      element: /*#__PURE__*/React.createElement(Button, {
        size: "lg"
      }, "Large")
    }, {
      label: "icon",
      element: /*#__PURE__*/React.createElement(Button, {
        size: "icon",
        "aria-label": "Add"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "Plus",
        size: 16
      }))
    }, {
      label: "disabled",
      element: /*#__PURE__*/React.createElement(Button, {
        disabled: true
      }, "Disabled")
    }]
  })), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "props",
    title: "Props"
  }, /*#__PURE__*/React.createElement(PropsTable, {
    props: [{
      name: "variant",
      type: "default | destructive | outline | secondary | ghost | link",
      default: "default",
      description: "Visual treatment. The teal default carries human actions; use link for inline navigation."
    }, {
      name: "size",
      type: "default | sm | lg | icon",
      default: "default",
      description: "Control height. icon is a 36x36 square."
    }, {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Drops to 50% opacity and removes pointer events."
    }, {
      name: "onClick",
      type: "(e: MouseEvent) => void",
      description: "Standard button handler; all native button props pass through."
    }]
  })));
}

/* ---------------- Mascot ---------------- */
const MASCOT = [{
  file: "shibasuke-human-full.png",
  title: "The human",
  jp: "あなた",
  desc: "Ochre watercolour, teal bandana, no circuitry. This one is you."
}, {
  file: "shibasuke-twin-full.png",
  title: "The twin",
  jp: "シバスケ",
  desc: "Blue, circuit-lit, crisper edges. This one is your twin."
}, {
  file: "shibasuke-scene-highfive.png",
  title: "Human and twin",
  jp: "相棒",
  desc: "The duality in one image: teacher and learner over the trained network."
}, {
  file: "shibasuke-scene-fuji-desk.png",
  title: "The desk",
  jp: "デスク",
  desc: "You work, the twin watches from the monitor and learns."
}, {
  file: "shibasuke-scene-training.png",
  title: "合格 · passed",
  jp: "合格",
  desc: "The mirror inverted — the twin works, you are on screen. Achievements only."
}, {
  file: "shibasuke-scene-exit.png",
  title: "The EXIT",
  jp: "出口",
  desc: "He walks out; his thinking stays. Ink-navy walls, warm sky beyond."
}];
function MascotDocs() {
  const [tab, setTab] = React.useState("cast");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "Two shibas: the painted one is you, the circuit-lit one \u2014 Shibasuke \u2014 is your twin. They are actors, not stickers."
  }, "Mascot"), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onValueChange: setTab,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "cast"
  }, "The cast"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "rules"
  }, "Rules"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "usage"
  }, "Usage"))), tab === "cast" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, MASCOT.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.file,
    style: {
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--rule)",
      overflow: "hidden",
      background: "var(--paper-2)",
      boxShadow: "var(--shadow-desk-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 150,
      background: "var(--paper)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-paper)",
      opacity: "var(--texture-paper-opacity)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/" + m.file,
    alt: m.title,
    style: {
      height: 120,
      objectFit: "contain",
      position: "relative"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontWeight: 600,
      fontSize: 17,
      margin: 0
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      margin: "4px 0 6px"
    }
  }, m.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, m.desc))))), tab === "rules" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      background: "var(--paper-2)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--twin-ink)",
      margin: "0 0 12px"
    }
  }, "Do \u2014 a scene at 30\u201350% weight"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-highfive.png",
    alt: "The ochre shiba and his circuit-lit twin high-fiving over a neural net",
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.2,
      margin: 0
    }
  }, "Teach once,", /*#__PURE__*/React.createElement("br", null), "not a hundred times."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "One scene per section. A scene is a statement.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid color-mix(in srgb, var(--destructive) 30%, transparent)",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      background: "color-mix(in srgb, var(--destructive) 5%, transparent)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--destructive)",
      margin: "0 0 12px"
    }
  }, "Don't \u2014 corner clipart"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-human-full.png",
    alt: "",
    style: {
      height: 40,
      position: "absolute",
      top: 14,
      right: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.2,
      margin: 0
    }
  }, "Teach once,", /*#__PURE__*/React.createElement("br", null), "not a hundred times."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "Tiny mascots read as clipart \u2014 that's the flattening that made the old sites feel generic."))), /*#__PURE__*/React.createElement(Alert, {
    variant: "info"
  }, /*#__PURE__*/React.createElement(AlertTitle, null, "Canon"), /*#__PURE__*/React.createElement(AlertDescription, null, "Shibasuke 1.0 (\u30B7\u30D0\u30B9\u30B1) is the twin model line. Green bandana with \u53CC on both characters. \u5408\u683C headband marks achievement moments. The cookie means warmth and reward. Never two shibas of the same treatment together \u2014 painted plus circuit-lit means human-and-twin."))), tab === "usage" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CodeBlock, null, '{/* A scene, sized to carry the section */}\n<img src="/assets/illustrations/shibasuke-scene-fuji-desk.png"\n     alt="Shibasuke at the desk" style={{ height: 260 }} />\n\n{/* The head crop — the only form allowed to shrink */}\n<img src="/assets/illustrations/shibasuke-twin-head.png" alt="" style={{ height: 28 }} />'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      padding: 20,
      background: "var(--paper-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/artifacts/stamp-shibasuke-1-0.png",
    alt: "Shibasuke 1.0 postage stamp",
    style: {
      height: 190
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/artifacts/boxart-twin-model.png",
    alt: "Twin model shipping box",
    style: {
      height: 150
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...micro,
      color: "var(--human-ink)"
    }
  }, "Printed artifacts"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 20,
      fontWeight: 600,
      margin: "10px 0 0",
      lineHeight: 1.3
    }
  }, "A twin you own should look", /*#__PURE__*/React.createElement("br", null), "like a thing that can be mailed."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      lineHeight: 1.7,
      marginTop: 10,
      maxWidth: 320
    }
  }, "Stamp, postmark, seal, box art, certificate. Japanese slots take real words: 100\u5186 \xB7 \u30C4\u30A4\u30F3\u30E2\u30C7\u30EB \xB7 \u30B7\u30D0\u30B9\u30B1 1.0 \xB7 \u6771\u4EAC\u4E2D\u592E.")))));
}
const PAGES = {
  intro: {
    breadcrumb: "Introduction",
    sections: [{
      id: "installation",
      label: "Installation"
    }, {
      id: "quickstart",
      label: "Quick start"
    }, {
      id: "themes",
      label: "The two themes"
    }],
    render: () => /*#__PURE__*/React.createElement(Intro, null)
  },
  contrast: {
    breadcrumb: "The Contrast",
    sections: [{
      id: "registers",
      label: "The two registers"
    }, {
      id: "table",
      label: "The table"
    }],
    render: () => /*#__PURE__*/React.createElement(Contrast, null)
  },
  type: {
    breadcrumb: "Typography",
    sections: [{
      id: "lora",
      label: "Lora"
    }, {
      id: "martian",
      label: "Martian Mono"
    }, {
      id: "dialogue",
      label: "Dialogue"
    }],
    render: () => /*#__PURE__*/React.createElement(TypographyDocs, null)
  },
  voice: {
    breadcrumb: "Voice & Tone",
    sections: [{
      id: "attributes",
      label: "The five attributes"
    }, {
      id: "vocabulary",
      label: "Vocabulary"
    }],
    render: () => /*#__PURE__*/React.createElement(VoiceDocs, null)
  },
  texture: {
    breadcrumb: "Texture",
    sections: [{
      id: "grain",
      label: "Paper grain"
    }, {
      id: "shadows",
      label: "Desk shadows"
    }, {
      id: "specgrid",
      label: "Spec-sheet grid"
    }],
    render: () => /*#__PURE__*/React.createElement(TextureDocs, null)
  },
  button: {
    breadcrumb: "Button",
    sections: [{
      id: "variants",
      label: "Variants"
    }, {
      id: "states",
      label: "Sizes & states"
    }, {
      id: "props",
      label: "Props"
    }],
    render: () => /*#__PURE__*/React.createElement(ButtonDocs, null)
  },
  mascot: {
    breadcrumb: "Mascot",
    sections: [{
      id: "cast",
      label: "The cast"
    }],
    render: () => /*#__PURE__*/React.createElement(MascotDocs, null)
  },
  logo: {
    breadcrumb: "Logo System",
    sections: [{
      id: "lockups",
      label: "Lockups"
    }],
    render: () => /*#__PURE__*/React.createElement(LogoDocs, null)
  }
};
function LogoDocs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "The mark is \u53CC \u2014 twin. Horizontal is primary; the symbol-only crop is what survives at 24px and 16px."
  }, "Logo System"), /*#__PURE__*/React.createElement(SectionBlock, {
    id: "lockups",
    title: "Lockups"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "center",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-xl)",
      padding: 24,
      background: "var(--paper-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/tsuin-black-horizontal-full.png",
    alt: "tsuin horizontal",
    style: {
      height: 36,
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/tsuin-black-vertical-full.png",
    alt: "tsuin vertical",
    style: {
      height: 84,
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      background: "#1A1B26",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/tsuin-white-horizontal-full.png",
    alt: "tsuin horizontal on ink",
    style: {
      height: 36,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-end"
    }
  }, [72, 24, 16].map(s => /*#__PURE__*/React.createElement("img", {
    key: s,
    src: "../../assets/logo/tsuin-blackonwhite-logo-round.png",
    alt: s + "px",
    style: {
      height: s,
      borderRadius: "50%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...micro
    }
  }, "72 \xB7 24 \xB7 16"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "On cream, the black lockup needs ", /*#__PURE__*/React.createElement("code", {
    style: {
      color: "var(--twin-ink)"
    }
  }, "mix-blend-mode: multiply"), " to hide its white matte \u2014 every lockup is currently PNG, so there is no transparent vector yet.")));
}
function Placeholder({
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
    sub: "This page exists in the source docs app but was not rebuilt in this kit. See the design system's own cards for " + label + "."
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--rule)",
      borderRadius: "var(--radius-xl)",
      padding: 48,
      textAlign: "center",
      color: "var(--ink-muted)",
      fontSize: "var(--twin-caption)"
    }
  }, "Intentionally blank \u2014 not reconstructed from source."));
}
Object.assign(window, {
  PAGES,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsShell.jsx
try { (() => {
const {
  Button,
  Input,
  Badge,
  Separator
} = window.TsuinAiDesignSystem_e97952;
const NAV = [{
  title: "Getting Started",
  items: [{
    label: "Introduction",
    key: "intro",
    icon: "Info"
  }]
}, {
  title: "Brand",
  items: [{
    label: "The Contrast",
    key: "contrast",
    icon: "Columns2"
  }, {
    label: "Foundation",
    key: "foundation",
    icon: "Target"
  }, {
    label: "Logo System",
    key: "logo",
    icon: "Layers"
  }, {
    label: "Typography",
    key: "type",
    icon: "Type"
  }, {
    label: "Color",
    key: "color",
    icon: "Palette"
  }, {
    label: "Voice & Tone",
    key: "voice",
    icon: "Feather"
  }, {
    label: "Texture",
    key: "texture",
    icon: "Layers2"
  }]
}, {
  title: "Components",
  items: [{
    label: "Button",
    key: "button",
    icon: "Square"
  }, {
    label: "Input",
    key: "input",
    icon: "TextCursor"
  }, {
    label: "Card",
    key: "card",
    icon: "CreditCard"
  }, {
    label: "Badge",
    key: "badge",
    icon: "Tag"
  }, {
    label: "Alert",
    key: "alert",
    icon: "AlertTriangle"
  }, {
    label: "Dialog",
    key: "dialog",
    icon: "MessageSquare"
  }, {
    label: "Select",
    key: "select",
    icon: "List"
  }, {
    label: "Tabs",
    key: "tabs",
    icon: "Settings2"
  }, {
    label: "Switch",
    key: "switch",
    icon: "ToggleLeft"
  }, {
    label: "Checkbox",
    key: "checkbox",
    icon: "CheckSquare"
  }, {
    label: "Avatar",
    key: "avatar",
    icon: "UserCircle"
  }, {
    label: "Tooltip",
    key: "tooltip",
    icon: "HelpCircle"
  }]
}, {
  title: "Illustrations",
  items: [{
    label: "Mascot",
    key: "mascot",
    icon: "Smile"
  }]
}];
function DocsHeader({
  theme,
  breadcrumb
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      height: "var(--docs-header-height)",
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--background) 80%, transparent)",
      backdropFilter: "var(--backdrop-blur)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/tsuin-black-logo-only.png",
    alt: "",
    style: {
      height: 20,
      mixBlendMode: theme === "light" ? "multiply" : "normal",
      filter: theme === "dark" ? "invert(1)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--human-ink)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Shibasuke"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)",
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--twin-label)",
      color: "var(--ink-muted)"
    }
  }, "Design System"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-foreground)",
      opacity: 0.4
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)"
    }
  }, breadcrumb)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)",
      border: "1px solid var(--border)",
      borderRadius: 4,
      padding: "4px 8px"
    }
  }, "v0.2.0"));
}
function DocsSidebar({
  route,
  onNavigate
}) {
  const [query, setQuery] = React.useState("");
  const sections = NAV.map(s => ({
    ...s,
    items: s.items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(s => s.items.length);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-width)",
      flexShrink: 0,
      borderRight: "1px solid var(--border)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 13
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search...",
    value: query,
    onChange: e => setQuery(e.target.value),
    style: {
      paddingLeft: 32,
      height: 32,
      fontSize: "var(--text-label)",
      background: "color-mix(in srgb, var(--muted) 50%, transparent)"
    }
  })), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-micro)",
      textTransform: "uppercase",
      fontWeight: 700,
      opacity: 0.4,
      margin: "0 0 12px",
      letterSpacing: "var(--tracking-widest)",
      padding: "0 12px"
    }
  }, s.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, s.items.map(i => {
    const active = route === i.key;
    return /*#__PURE__*/React.createElement("li", {
      key: i.key
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate(i.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "8px 12px",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-body)",
        textAlign: "left",
        cursor: "pointer",
        transition: "all var(--duration-slow) var(--ease)",
        background: active ? "var(--twin-wash)" : "transparent",
        color: active ? "var(--twin-ink)" : "var(--ink-muted)",
        fontWeight: active ? 600 : 400,
        border: "1px solid " + (active ? "color-mix(in srgb, var(--twin) 30%, transparent)" : "transparent"),
        boxShadow: active ? "var(--shadow-sm)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6,
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i.icon,
      size: 14
    })), i.label, active && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--twin)"
      }
    })));
  }))))));
}
function RightNav({
  sections
}) {
  const [activeId, setActiveId] = React.useState("");
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setActiveId(e.target.id);
    }), {
      rootMargin: "-20% 0% -70% 0%"
    });
    sections.forEach(({
      id
    }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);
  if (!sections.length) return null;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 208,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "var(--docs-header-height)",
      paddingTop: 24,
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      fontWeight: 700,
      opacity: 0.4,
      margin: "0 0 12px",
      letterSpacing: "var(--tracking-widest)"
    }
  }, "On this page"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, sections.map(({
    id,
    label
  }) => {
    const active = activeId === id;
    return /*#__PURE__*/React.createElement("li", {
      key: id
    }, /*#__PURE__*/React.createElement("a", {
      href: "#" + id,
      style: {
        display: "block",
        fontSize: "var(--twin-caption)",
        padding: "4px 0 4px 12px",
        textDecoration: "none",
        transition: "var(--transition-colors)",
        borderLeft: "2px solid " + (active ? "var(--twin)" : "transparent"),
        color: active ? "var(--twin-ink)" : "var(--ink-muted)",
        fontWeight: active ? 500 : 400
      }
    }, label));
  }))));
}
function SectionBlock({
  id,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      marginBottom: 48,
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 16px"
    }
  }, title), children);
}
function CodeBlock({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      background: "var(--code-bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      fontSize: "var(--text-code)",
      lineHeight: 2,
      fontFamily: "var(--font-mono)",
      color: "var(--code-fg-dim)",
      whiteSpace: "pre-wrap"
    }
  }, children));
}
function ComponentPreview({
  preview,
  code
}) {
  const [tab, setTab] = React.useState("preview");
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const trigger = (v, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab(v),
    style: {
      height: 24,
      padding: "0 12px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      fontWeight: 500,
      transition: "all var(--duration) var(--ease)",
      background: tab === v ? "var(--paper)" : "transparent",
      color: tab === v ? "var(--ink)" : "var(--ink-muted)",
      boxShadow: tab === v ? "var(--shadow-desk-sm)" : "none"
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      height: 32,
      alignItems: "center",
      gap: 2,
      borderRadius: "var(--radius-lg)",
      background: "var(--paper-3)",
      padding: 4
    }
  }, trigger("preview", "Preview"), trigger("code", "Code"))), tab === "preview" ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--rule)",
      background: "var(--paper-2)",
      boxShadow: "var(--shadow-desk-sm)",
      padding: 32,
      minHeight: 128,
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center",
      justifyContent: "center"
    }
  }, preview) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--code-border)",
      background: "var(--code-bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    "aria-label": "Copy code",
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: 6,
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      border: "none",
      background: "rgba(242,232,213,0.10)",
      color: "var(--code-fg-dim)",
      transition: "var(--transition-colors)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copied ? "Check" : "Copy",
    size: 13
  })), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      overflowX: "auto",
      padding: 16,
      fontSize: "var(--twin-code)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      color: "var(--code-fg-dim)",
      fontFamily: "var(--font-twin)",
      whiteSpace: "pre"
    }
  }, code))));
}

// StateShowcase — grounded on src/components/docs/StateShowcase.tsx:
// a labelled grid cell per state, 10px uppercase mono caption under each element.
function StateShowcase({
  items,
  columns = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", 1fr)",
      gap: 12
    }
  }, items.map(({
    label,
    element
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: 16,
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--rule)",
      background: "color-mix(in srgb, var(--paper-3) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 36
    }
  }, element), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)"
    }
  }, label))));
}

// PropsTable — grounded on src/components/docs/PropsTable.tsx: four fixed columns,
// name in the accent colour with a * when required, type in a tinted code chip, em dash for no default.
function PropsTable({
  props
}) {
  const {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.TsuinAiDesignSystem_e97952;
  const head = {
    fontFamily: "var(--font-twin)",
    fontWeight: 600,
    color: "var(--ink)",
    fontSize: "var(--twin-caption)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--rule)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, {
    style: {
      background: "color-mix(in srgb, var(--paper-3) 60%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(TableHead, {
    style: {
      ...head,
      width: 144
    }
  }, "Name"), /*#__PURE__*/React.createElement(TableHead, {
    style: {
      ...head,
      width: 192
    }
  }, "Type"), /*#__PURE__*/React.createElement(TableHead, {
    style: {
      ...head,
      width: 112
    }
  }, "Default"), /*#__PURE__*/React.createElement(TableHead, {
    style: head
  }, "Description"))), /*#__PURE__*/React.createElement(TableBody, null, props.map(p => /*#__PURE__*/React.createElement(TableRow, {
    key: p.name
  }, /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--twin-ink)"
    }
  }, p.name, p.required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--destructive)",
      marginLeft: 2
    }
  }, "*"))), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      background: "var(--paper-3)",
      padding: "2px 6px",
      borderRadius: "var(--radius-sm)"
    }
  }, p.type)), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px"
    }
  }, p.default ? /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)"
    }
  }, p.default) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)",
      opacity: 0.5,
      fontSize: "var(--twin-caption)"
    }
  }, "\u2014")), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      padding: "12px 16px",
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, p.description))))));
}
Object.assign(window, {
  DocsHeader,
  DocsSidebar,
  RightNav,
  SectionBlock,
  CodeBlock,
  ComponentPreview,
  StateShowcase,
  PropsTable,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/icon.jsx
try { (() => {
// lucide is the icon system for both Tsuin surfaces (lucide-react in source).
// Loaded from CDN as UMD; this reads the raw icon nodes so React owns the SVG.
function Icon({
  name,
  size = 16,
  color = "currentColor",
  style
}) {
  const L = window.lucide || {};
  let node = L[name] || L.icons && L.icons[name];
  if (!node) return null;
  let children = node;
  if (Array.isArray(node) && node[0] === "svg") children = node[2] || [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      display: "block",
      ...style
    }
  }, (children || []).map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge
} = window.TsuinAiDesignSystem_e97952;
function TerminalMockup() {
  const L = ({
    n,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      flexShrink: 0,
      textAlign: "right",
      userSelect: "none",
      color: "var(--code-gutter)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-2xl)",
      border: "1px solid var(--code-border)",
      background: "var(--code-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      background: "var(--code-bg-chrome)",
      borderBottom: "1px solid var(--code-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-red)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-yellow)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-green)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label)",
      marginLeft: 8,
      color: "var(--code-muted)"
    }
  }, "token.service.ts"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "var(--text-label)",
      padding: "2px 8px",
      borderRadius: "var(--radius-full)",
      fontWeight: 500,
      background: "rgba(42,195,222,0.12)",
      color: "var(--code-cyan)"
    }
  }, "\u2726 Tsuin active")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 16,
      fontSize: "var(--text-label)",
      lineHeight: 2,
      color: "var(--code-fg)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    n: 1
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-comment)"
    }
  }, "// token.service.ts")), /*#__PURE__*/React.createElement(L, {
    n: 2
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement(L, {
    n: 3
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-purple)"
    }
  }, "async function "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-blue)"
    }
  }, "rotateRefreshToken"), "("), /*#__PURE__*/React.createElement(L, {
    n: 4
  }, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-yellow)"
    }
  }, "userId"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-cyan)"
    }
  }, ": string")), /*#__PURE__*/React.createElement(L, {
    n: 5
  }, ") {"), /*#__PURE__*/React.createElement(L, {
    n: 6
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-comment)"
    }
  }, "\xA0\xA0// 7-day TTL \u2014 see Tsuin \u2197")), /*#__PURE__*/React.createElement(L, {
    n: 7
  }, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-purple)"
    }
  }, "const "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-yellow)"
    }
  }, "ttl "), "= ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-orange)"
    }
  }, "604800"), ";"), /*#__PURE__*/React.createElement(L, {
    n: 8
  }, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-purple)"
    }
  }, "await "), "redis.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-blue)"
    }
  }, "setex"), "("), /*#__PURE__*/React.createElement(L, {
    n: 9
  }, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-green)"
    }
  }, "`refresh:${userId}`"), ","), /*#__PURE__*/React.createElement(L, {
    n: 10
  }, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-yellow)"
    }
  }, "ttl"), ", ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--code-yellow)"
    }
  }, "newToken")), /*#__PURE__*/React.createElement(L, {
    n: 11
  }, "\xA0\xA0);"), /*#__PURE__*/React.createElement(L, {
    n: 12
  }, "}")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 208,
      padding: 16,
      fontSize: "var(--text-label)",
      flexShrink: 0,
      background: "var(--code-bg-pane)",
      borderLeft: "1px solid var(--code-border)",
      color: "var(--code-fg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--code-cyan)"
    }
  }, "\u2726 Tsuin"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label)",
      padding: "1px 6px",
      borderRadius: 4,
      background: "rgba(42,195,222,0.1)",
      color: "var(--code-cyan)"
    }
  }, "Decision")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 8,
      color: "var(--code-yellow)"
    }
  }, "Redis over Postgres"), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: "var(--leading-relaxed)",
      marginBottom: 16,
      color: "var(--code-muted)",
      fontSize: "var(--text-caption)"
    }
  }, "\"Postgres token table was hitting 400ms P99 at 50k req/s. Redis brought it to <8ms. Tried JWT blacklist first \u2014 added too much complexity.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingTop: 12,
      borderTop: "1px solid var(--code-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--text-caption)",
      fontWeight: 700,
      background: "var(--code-cyan)",
      color: "var(--code-bg)"
    }
  }, "S"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--code-fg)",
      fontSize: 10
    }
  }, "Sarah Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--code-comment)",
      fontSize: 10
    }
  }, "Feb 14, 2024"))))));
}
const PROBLEMS = [{
  icon: "AlertTriangle",
  title: "The bus factor stress",
  desc: "You're the only one who knows how the auth layer works. If you take a vacation, the team is blocked."
}, {
  icon: "Clock",
  title: "The bug-fixer trap",
  desc: "You're spending 40% of your sprint fixing technical debt you didn't even create. It's the invisible label that ends careers."
}, {
  icon: "FileWarning",
  title: "A stranger's output",
  desc: "Every AI tool hands you more to review, because it thinks like a stranger. And the copy it keeps isn't yours."
}];
const BENEFITS = [{
  title: "Zero-Knowledge Onboarding",
  desc: "When a new hire joins, they don't ping you. They ask your Twin. It explains the \"why\" behind the useEffect hook you wrote in 2023."
}, {
  title: "Self-healing PRs",
  desc: "Your twin suggests patches for recurring bugs in your style, with your safety patterns — so the work comes back the way you'd have written it."
}, {
  title: "Mental Defrag",
  desc: "Offload the system state to your Twin. Go to sleep knowing the \"tribal knowledge\" is backed up and accessible."
}];
const FEATURES = [{
  icon: "Code2",
  title: "IDE of your preference",
  desc: "Built for where you actually work. Tsuin lives in your editor, not another tab or dashboard."
}, {
  icon: "Lock",
  title: "Runs on your machine",
  desc: "Your code never leaves your desk. The twin is yours — we don't keep a copy. (Solo plan)"
}, {
  icon: "Sparkles",
  title: "No prompt engineering",
  desc: "You don't write prompts. RLPF learns from your feedback and your reasoning while you work."
}, {
  icon: "Search",
  title: "Instant context search",
  desc: "Search any decision in milliseconds. Filter by author, file, date, or keyword. From inside VSCode."
}, {
  icon: "GitBranch",
  title: "Git-native",
  desc: "Reasoning lives alongside your commits. Check out any branch, get the full decision history."
}, {
  icon: "Users",
  title: "Twin-to-Twin",
  desc: "Next year, twins learn to talk to each other. The cloud sits between twins — never inside yours."
}];
const MODES = [{
  id: "voice",
  icon: "Mic",
  label: "Voice",
  desc: "Speak to your Twin hands-free while you code.",
  example: "\"Why did we choose Postgres over Mongo for this service?\"",
  response: "Based on the decision captured Mar 2024: Postgres was chosen for ACID compliance on payment records. Mongo was prototyped but rejected — Kai noted that eventual consistency was too risky for billing. See PR #189 and the RFC in Notion."
}, {
  id: "chat",
  icon: "MessageSquare",
  label: "Chat",
  desc: "Type a question like you're messaging a teammate.",
  example: "What broke last time someone touched this file?",
  response: "Two incidents: Nov 2024 — a race condition in the retry logic (fixed in PR #247). Feb 2025 — env var missing in prod deploy, caused 12-min downtime. Both are logged with root cause and fix. Want the diffs?"
}, {
  id: "messages",
  icon: "Hash",
  label: "Messages",
  desc: "Connect Slack, Discord, or any messaging app.",
  example: "@tsuin what's the status of the auth refactor?",
  response: "The auth refactor (Epic #44) is 60% complete. Last update from Priya on Jan 9: session token rotation is done, OAuth scopes are pending. 3 open PRs. No blockers flagged. ETA end of sprint."
}, {
  id: "video",
  icon: "Video",
  label: "Video",
  desc: "Record a loom or video note — Twin transcribes and indexes it.",
  example: "[Video] Kai walks through the payment flow architecture",
  response: "Transcribed and linked to files: src/payments/, src/billing/. Key decision captured: idempotency keys added after a double-charge incident in staging. Tagged as Architecture decision — searchable by the team."
}, {
  id: "screen",
  icon: "Monitor",
  label: "Screen",
  desc: "Share your screen — the twin reads the context you're looking at.",
  example: "[Screen recording] Debugging the flaky test in CI",
  response: "I don't have enough from you on this yet. You've never walked me through the CI mock server — record 60 seconds on it and I'll have your take next time."
}];
const STEPS = [{
  step: "01",
  title: "The Source",
  desc: "Connect your GitHub/GitLab. Your Twin analyzes your commit history to understand your architectural preferences."
}, {
  step: "02",
  title: "The Screen Recording",
  desc: "Record a quick 60-second screen share when you need something to be remembered. Your Twin extracts the reasoning that code comments miss."
}, {
  step: "03",
  title: "The Thread",
  desc: "Sync Slack or Discord. Your Twin learns the \"why\" from the technical debates you've already had with your team."
}];
const PILLARS = [{
  icon: "HardDrive",
  title: "On-premise, always",
  desc: "Runs locally on your machine. No cloud dependency, no subscriptions, no data leaving your desk."
}, {
  icon: "Lock",
  title: "Your data, full stop",
  desc: "Reasoning, decisions, captures — stored in your git repo. You own it, version it, take it anywhere."
}, {
  icon: "Layers",
  title: "Floats on your screen",
  desc: "Not in your IDE. Not in a terminal tab. A lightweight window that lives on your desktop, ready whenever you are."
}, {
  icon: "Infinity",
  title: "Pay once. Keep it.",
  desc: "No monthly billing, no renewal emails. Your twin is never rented — the only subscription is the cloud between twins."
}];
const wrap = {
  margin: "0 auto",
  maxWidth: "var(--container-max)",
  padding: "0 var(--gutter)"
};
const iconTile = tone => ({
  width: 40,
  height: 40,
  borderRadius: "var(--radius-lg)",
  background: "color-mix(in srgb, var(--" + tone + ") 10%, transparent)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16
});
function Home({
  onNavigate
}) {
  const [mode, setMode] = React.useState("voice");
  const current = MODES.find(m => m.id === mode);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PaperTexture, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 80,
      paddingBottom: 64,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--twin-ink)",
      fontWeight: 700,
      margin: "0 0 18px"
    }
  }, "Pre-order this weekend \xB7 USD 99 \xB7 Steam"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-display)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-tight)",
      margin: "0 0 24px"
    }
  }, "Train your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--human-ink)"
    }
  }, "twin.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-lead)",
      color: "var(--ink-2)",
      lineHeight: 1.6,
      margin: "0 0 32px",
      maxWidth: 512
    }
  }, "Most of what you know was never written down. Right now it leaks into someone else's model. Your twin learns you instead \u2014 and you keep it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Pre-order ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 14
  }), " Watch the demo")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)"
    }
  }, "Solo: $500 one time. Runs on your machine. You own it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TerminalMockup, null), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-fuji-desk.png",
    alt: "Shibasuke at the desk with his twin on screen",
    style: {
      position: "absolute",
      bottom: -56,
      right: -48,
      height: 260,
      zIndex: 10
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0",
      background: "var(--background)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The problem",
    title: "Your brain isn't a database.",
    sub: "Every time you're pulled into a \"quick sync\" to explain a PR from last quarter, you're losing 23 minutes of deep work."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, PROBLEMS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    radius: "xl",
    style: {
      padding: 24,
      borderWidth: "var(--border-width-emphasis)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: iconTile("destructive")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 20,
    color: "var(--destructive)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-twin)",
      fontWeight: 600,
      fontSize: "var(--twin-h3)",
      margin: "0 0 10px",
      letterSpacing: "var(--tracking-twin)",
      lineHeight: 1.4
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, p.desc)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0",
      background: "color-mix(in srgb, var(--secondary) 30%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Benefits",
    title: "Reclaim Your \"Deep Work\" Hours",
    sub: "Your AI Twin is a trustable model of your own engineering intuition.",
    mascot: "shibasuke-twin-head.png",
    mascotSide: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 40
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.title,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-human)",
      fontWeight: 600,
      fontSize: 22,
      margin: "0 0 12px",
      letterSpacing: "var(--tracking-tight)"
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, b.desc)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Features",
    title: "Built for the ones who built real systems by hand.",
    sub: "No new tools to learn. No workflow to change. It learns as you work.",
    mascot: "shibasuke-human-head.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, FEATURES.map(ft => /*#__PURE__*/React.createElement(Card, {
    key: ft.title,
    radius: "xl",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: iconTile("primary")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ft.icon,
    size: 20,
    color: "var(--primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-twin)",
      fontWeight: 600,
      fontSize: "var(--twin-h3)",
      margin: "0 0 10px",
      letterSpacing: "var(--tracking-twin)",
      lineHeight: 1.4
    }
  }, ft.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, ft.desc)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Training loop \xB7 RLPF",
    title: "You ask in your words. It answers in its own.",
    sub: "The twin isn't locked in your IDE. It's a window on your desk \u2014 always open, never in the way. Speak, type, message, or record. When it hasn't learned something yet, it tells you.",
    mascot: "monitor-isometric.png",
    mascotSide: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 8,
      marginBottom: 32
    }
  }, MODES.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => setMode(m.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      cursor: "pointer",
      border: "1px solid " + (mode === m.id ? "var(--primary)" : "var(--border)"),
      background: mode === m.id ? "var(--primary)" : "transparent",
      color: mode === m.id ? "var(--primary-foreground)" : "var(--muted-foreground)",
      transition: "var(--transition-colors)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 14
  }), m.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: 768,
      borderRadius: "var(--radius-2xl)",
      border: "1px solid var(--border)",
      background: "var(--card)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 16px",
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--muted) 30%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-red)",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-yellow)",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--code-green)",
      opacity: 0.7
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)",
      marginLeft: 8,
      fontWeight: 500
    }
  }, "Tsuin \u2014 AI Twin"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--success)"
    }
  }), "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: current.icon,
    size: 12,
    color: "var(--primary)"
  }), /*#__PURE__*/React.createElement("span", null, current.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80%",
      borderRadius: "var(--radius-2xl)",
      borderTopRightRadius: "var(--radius-sm)",
      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
      border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 17,
      lineHeight: 1.45,
      margin: 0
    }
  }, current.example), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--ink-muted)",
      margin: "8px 0 0",
      textAlign: "right"
    }
  }, "You"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80%",
      borderRadius: "var(--radius-2xl)",
      borderTopLeftRadius: "var(--radius-sm)",
      background: "var(--card)",
      border: "1px solid var(--border)",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-twin-head.png",
    alt: "",
    style: {
      width: 20,
      height: 20,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontWeight: 700,
      color: "var(--twin-ink)"
    }
  }, "\u30B7\u30D0\u30B9\u30B1 \xB7 your twin")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-body)",
      color: "var(--ink-2)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, current.response))))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)",
      marginTop: 24
    }
  }, "Only you can train it. It learns from your feedback \u2014 actively when you correct it, passively from your commits, PRs, and threads."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0",
      background: "color-mix(in srgb, var(--secondary) 30%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "RLPF",
    title: "Three ways it learns you.",
    sub: "Reinforcement Learning from Personal Feedback. Only you can train it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 40
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.step,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      border: "2px solid var(--primary)",
      background: "var(--background)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 24px",
      fontWeight: 600,
      color: "var(--primary)",
      fontSize: 16
    }
  }, s.step), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-human)",
      fontWeight: 600,
      fontSize: 22,
      margin: "0 0 12px",
      letterSpacing: "var(--tracking-tight)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, s.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "dark"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0",
      background: "var(--background)",
      color: "var(--foreground)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--primary)",
      margin: "0 0 12px",
      fontWeight: 500
    }
  }, "Solo Plan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-h1)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1.1,
      margin: "0 0 16px"
    }
  }, "Your twin.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--human)"
    }
  }, "On your machine. Yours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: "0 0 32px",
      maxWidth: 448
    }
  }, "Solo is built for the developer who wants complete ownership. Your twin runs locally, learns how you work, and never phones home. You buy it once. It's yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 52,
      fontWeight: 600
    }
  }, "$99"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: "var(--ink-muted)",
      textDecoration: "line-through"
    }
  }, "$500"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontWeight: 700,
      background: "var(--human-wash)",
      color: "var(--human-ink)",
      padding: "5px 9px",
      borderRadius: "var(--radius-artifact)"
    }
  }, "pre-order price")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)",
      margin: "0 0 32px"
    }
  }, "USD 99 / RM500 this weekend, then $500 \xB7 One time, not a subscription \xB7 Only on Steam"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Pre-order ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNavigate("pricing")
  }, "See full pricing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border)",
      background: "var(--card)",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-lg)",
      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 17,
    color: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-body)",
      marginBottom: 6
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, p.desc))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "128px 0",
      background: "color-mix(in srgb, var(--secondary) 20%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(PaperTexture, null), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: 768,
      padding: "0 var(--gutter)",
      textAlign: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-exit.png",
    alt: "The shiba walking out through an EXIT door into open sky",
    style: {
      height: 300,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--primary)",
      margin: "0 0 16px",
      fontWeight: 500
    }
  }, "Get started today"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-display)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 24px",
      lineHeight: 1.1
    }
  }, "You can't be replaced", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--human-ink)"
    }
  }, "by something you own.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-lead)",
      color: "var(--ink-2)",
      margin: "0 auto 40px",
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, "Train it this weekend. Get your Saturdays back after that."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      height: 48,
      padding: "0 32px",
      fontSize: 14
    }
  }, "Pre-order ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)"
    }
  }, "USD 99 / RM500 \xB7 One time \xB7 Runs on your machine"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Manifesto.jsx
try { (() => {
/* Manifesto page — text verbatim from tsuin-manifesto-short.md (draft v4, 7 Aug 2026). */
const MANIFESTO = [["AGI is near.", "We believe it is one or two breakthroughs away."], ["Everyone racing to build it is building the same thing:", "one giant model, owned by one company, the same for everyone.", "You will rent it by the month."], ["And here is what's already happening while you wait.", "Every prompt you write teaches their model.", "Your corrections, your choices, your way of thinking — collected, trained on, and sold back to you as a subscription.", "You bring the intelligence. They keep the asset."]];
const MANIFESTO_2 = [["A Cognitive AI Twin: a personal model that captures your thinking and continuously learns from you, to become more like you.", "Not an avatar. Not a chatbot.", "Continual learning — we have this.", "Recursive self-improvement — next.", "Then AGI. Yours. It behaves like you."], ["One problem still stands in the way: catastrophic forgetting — a model forgets what it learned when it learns something new.", "That is the research we do."], ["It runs on your machine.", "You train it. You buy it once. You own it."]];
function ManifestoScreen() {
  const wrap = {
    margin: "0 auto",
    maxWidth: 720,
    padding: "0 var(--gutter)"
  };
  const verse = {
    fontFamily: "var(--font-human)",
    fontSize: 21,
    lineHeight: 1.65,
    color: "var(--foreground)",
    margin: "0 0 28px"
  };
  const micro = {
    fontFamily: "var(--font-twin)",
    fontSize: "var(--twin-micro)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-widest)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PaperTexture, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "88px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--twin-ink)"
    }
  }, "Manifesto \xB7 \u5BA3\u8A00"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-display)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      margin: "16px 0 0"
    }
  }, "The tsuin Manifesto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--muted-foreground)",
      lineHeight: 1.8,
      margin: "14px 0 0"
    }
  }, "Draft v4, 7 Aug 2026. Source: the AGI Salon KL deck + Category Design doc. Direct, no stories, no fluff."), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: "1px solid var(--border)",
      margin: "36px 0 40px"
    }
  }), MANIFESTO.map((stanza, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: verse
  }, stanza.map((line, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, line, j < stanza.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "20px 0 40px",
      background: "color-mix(in srgb, var(--secondary) 35%, transparent)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      gap: 32,
      alignItems: "center",
      padding: "40px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 34,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-tight)",
      margin: 0,
      flex: 1
    }
  }, "We are building AGI the other way."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-highfive.png",
    alt: "The ochre shiba and his circuit-lit twin high-fiving over a neural net",
    style: {
      width: 300,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "48px 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, MANIFESTO_2.map((stanza, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: verse
  }, stanza.map((line, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, line, j < stanza.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 30,
      fontWeight: 600,
      lineHeight: 1.3,
      margin: "8px 0 0"
    }
  }, "AGI won't be theirs. It will be yours."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-h1)",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-tight)",
      margin: "40px 0 0"
    }
  }, "Train your twin."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--muted-foreground)",
      marginTop: 22,
      letterSpacing: "0.16em"
    }
  }, "tsuin \xB7 \u30C4\u30A4\u30F3"))));
}
Object.assign(window, {
  ManifestoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
const {
  Button,
  Card
} = window.TsuinAiDesignSystem_e97952;
const PLANS = [{
  name: "Solo",
  price: "$500",
  priceSub: "one time",
  note: "USD 99 / RM500 this weekend",
  desc: "Your twin, on your machine. You own it — there is nothing to renew.",
  features: ["One twin, trained only by you", "Runs locally — your data stays home", "RLPF training loop", "Terminal and desktop window", "All future updates"],
  cta: "Pre-order",
  variant: "default",
  highlight: true
}, {
  name: "Team",
  price: "$200",
  priceSub: "per seat / month",
  note: "Twin-to-Twin cloud",
  desc: "The cloud between twins. Your twin itself is never rented.",
  features: ["Everything in Solo, per person", "Twins talk to each other", "Onboarding on your past decisions", "Shared reasoning across the team", "Priority support"],
  cta: "Join the waitlist",
  variant: "outline",
  highlight: false
}, {
  name: "Company",
  price: "Let's talk",
  priceSub: "",
  note: "next year",
  desc: "People first, companies next year — when twins learn to talk at scale.",
  features: ["Volume licensing", "SSO / SAML", "Audit logs", "Deployment support", "Named contact"],
  cta: "Talk to us",
  variant: "outline",
  highlight: false
}];
const INTEGRATIONS = ["GitHub", "GitLab", "Bitbucket", "Slack", "Discord", "Linear"];
function PricingScreen() {
  const wrap = {
    margin: "0 auto",
    maxWidth: "var(--container-max)",
    padding: "0 var(--gutter)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Pricing",
    title: "You own your twin.",
    sub: "Every tool you use already learns from you \u2014 and the vendor keeps the copy. This one belongs to you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      alignItems: "stretch"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    radius: "xl",
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      border: p.highlight ? "2px solid var(--human)" : "1px solid var(--rule)",
      boxShadow: p.highlight ? "var(--shadow-desk-lg)" : "var(--shadow-desk-sm)"
    }
  }, p.highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--twin-micro)",
      fontWeight: 700,
      color: "var(--human-ink)",
      marginBottom: 14,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)"
    }
  }, "Shipping now"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontWeight: 700,
      color: "var(--ink-muted)",
      marginBottom: 8
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-h1)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)"
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--twin-caption)",
      color: "var(--ink-muted)"
    }
  }, p.priceSub)), p.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "inline-block",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontWeight: 700,
      color: "var(--human-ink)",
      background: "var(--human-wash)",
      padding: "4px 8px",
      borderRadius: "var(--radius-artifact)"
    }
  }, p.note), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 17,
      color: "var(--ink-2)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, p.desc)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 32px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1
    }
  }, p.features.map(ft => /*#__PURE__*/React.createElement("li", {
    key: ft,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      fontSize: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 13,
    color: "var(--twin-ink)"
  })), ft))), /*#__PURE__*/React.createElement(Button, {
    variant: p.variant,
    style: {
      width: "100%"
    }
  }, p.cta)))))), /*#__PURE__*/React.createElement("div", {
    className: "dark"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0",
      background: "color-mix(in srgb, var(--secondary) 30%, transparent)",
      color: "var(--foreground)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-h2)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 12px"
    }
  }, "It learns where you already work."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--twin-body)",
      color: "var(--ink-muted)",
      margin: "0 auto 40px",
      maxWidth: 460,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "No new tools. No behaviour change. Steam first, then the terminal, then your phone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12
    }
  }, INTEGRATIONS.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      background: "var(--card)",
      fontSize: "var(--text-body)",
      fontWeight: 500
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 16px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
      background: "color-mix(in srgb, var(--muted) 30%, transparent)",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      color: "var(--muted-foreground)"
    }
  }, "More..."))))));
}
Object.assign(window, {
  PricingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Research.jsx
try { (() => {
/* Research page. Content verbatim from tsuin-manifesto-short.md and the Aug 2026 pitch deck
   (slide 11 roadmap, slide 19 RL comparison, slide 21 RLPF optimization layer). */
const {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge
} = window.TsuinAiDesignSystem_e97952;
const ROADMAP_STAGES = [["Continual Learning", "(we have this)", true], ["Recursive Self-Improvement", "(what we will work on next)", false], ["AGI", "(your personal AGI that you own and behaves like you)", false]];
const RL_ROWS = [["Primary Goal", "Alignment, safety, and helpfulness.", "Complex reasoning and problem-solving.", "Capture human's logic"], ["Reward Signal", "Human preference rankings.", "Correctness of the final answer (outcomes).", "Mirror human's thought process"], ["Model Behavior", "Direct response.", "Internal Chain-of-Thought (CoT).", "Autonomous learning & self fine-tune for error correction"], ["Compute Focus", "Training-time optimization.", "Both train-time and test-time scaling.", "Continual Post-Training"]];
const RLPF_STEPS = ["User", "3B model SFT Training", "DPO Training", "RL (GRPO)", "Logic Capture algorithm", "AI Twin model"];
function ResearchScreen() {
  const wrap = {
    margin: "0 auto",
    maxWidth: "var(--container-max)",
    padding: "0 var(--gutter)"
  };
  const micro = {
    fontFamily: "var(--font-twin)",
    fontSize: "var(--twin-micro)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-widest)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PaperTexture, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "88px 0 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...micro,
      color: "var(--twin-ink)"
    }
  }, "Research \xB7 \u7814\u7A76"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-display)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      margin: "16px 0 0"
    }
  }, "That is the research we do."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-lead)",
      lineHeight: 1.55,
      color: "var(--muted-foreground)",
      margin: "20px 0 0",
      maxWidth: 520
    }
  }, "One problem still stands in the way: catastrophic forgetting \u2014 a model forgets what it learned when it learns something new.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/shibasuke-scene-training.png",
    alt: "The twin at his desk in a \u5408\u683C headband, the human on his monitor",
    style: {
      width: 380,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "64px 0",
      background: "color-mix(in srgb, var(--secondary) 35%, transparent)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "AI research roadmap",
    title: "Continual learning, then recursion, then yours.",
    sub: "First AI Research Milestone Completed in Feb 2026."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, ROADMAP_STAGES.map(([title, note, done], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      borderTop: done ? "2px solid var(--human)" : "1px solid var(--border)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...micro,
      color: "var(--muted-foreground)"
    }
  }, "0" + (i + 1)), done ? /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary"
  }, "Completed") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: 26,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.75,
      color: "var(--muted-foreground)",
      margin: "10px 0 0"
    }
  }, note)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Technical architecture",
    title: "Comparison of RL Optimization Methods",
    sub: "Where the Logic Capture algorithm sits against the methods it is measured against."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--card)",
      boxShadow: "var(--shadow-desk-sm)"
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Model Feature"), /*#__PURE__*/React.createElement(TableHead, null, "Traditional RLHF (e.g.: GPT-4)"), /*#__PURE__*/React.createElement(TableHead, null, "o1-Style RL Optimization"), /*#__PURE__*/React.createElement(TableHead, {
    style: {
      color: "var(--twin-ink)"
    }
  }, "Tsuin Logic Capture Algorithm"))), /*#__PURE__*/React.createElement(TableBody, null, RL_ROWS.map(([feature, rlhf, o1, tsuin]) => /*#__PURE__*/React.createElement(TableRow, {
    key: feature
  }, /*#__PURE__*/React.createElement(TableCell, {
    style: {
      fontWeight: 500
    }
  }, feature), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      color: "var(--muted-foreground)"
    }
  }, rlhf), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      color: "var(--muted-foreground)"
    }
  }, o1), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      background: "var(--twin-wash)"
    }
  }, tsuin)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "0 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "RLPF",
    title: "RLPF Optimization Layer",
    sub: "Reinforcement Learning from Personal Feedback. Only you can train it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      background: "var(--card)",
      padding: "32px 28px",
      boxShadow: "var(--shadow-desk)"
    }
  }, /*#__PURE__*/React.createElement(SpecGrid, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 10
    }
  }, RLPF_STEPS.map((step, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: i === 0 || i === RLPF_STEPS.length - 1 ? "1px solid var(--human)" : "var(--spec-hairline)",
      background: i === 0 || i === RLPF_STEPS.length - 1 ? "color-mix(in srgb, var(--human) 8%, transparent)" : "var(--twin-wash)",
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      lineHeight: 1.5
    }
  }, step), i < RLPF_STEPS.length - 1 ? /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 15,
    style: {
      color: "var(--muted-foreground)"
    }
  }) : null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-caption)",
      color: "var(--muted-foreground)",
      lineHeight: 1.8,
      margin: "20px 0 0",
      maxWidth: 620
    }
  }, "It learns as you work \u2014 through a training loop we built and named: RLPF, Reinforcement Learning from Personal Feedback. Only you can train it. It runs on your machine \u2014 your data stays home."))));
}
Object.assign(window, {
  ResearchScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Research.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const {
  Button
} = window.TsuinAiDesignSystem_e97952;
const NAV = [{
  label: "Manifesto",
  key: "manifesto"
}, {
  label: "Research",
  key: "research"
}, {
  label: "Pricing",
  key: "pricing"
}];
const DOCS_SECTIONS = [{
  icon: "BookOpen",
  label: "Getting Started",
  desc: "Install it, then train your first twin."
}, {
  icon: "Lightbulb",
  label: "Concepts",
  desc: "Cognitive AI Twin, logic capture, RLPF."
}, {
  icon: "Cpu",
  label: "How it Works",
  desc: "The training loop, storage, and what stays local."
}, {
  icon: "HelpCircle",
  label: "FAQ",
  desc: "Common questions answered directly."
}];
function Navbar({
  theme,
  route,
  onNavigate
}) {
  const [docsOpen, setDocsOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--background) 80%, transparent)",
      backdropFilter: "var(--backdrop-blur)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-max)",
      padding: "0 var(--gutter)",
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: theme === "dark" ? "../../assets/logo/tsuin-white-horizontal-full.png" : "../../assets/logo/tsuin-black-horizontal-full.png",
    alt: "Tsuin",
    style: {
      height: 28,
      width: "auto",
      mixBlendMode: theme === "light" ? "multiply" : "normal"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--twin-ink)",
      background: "var(--twin-wash)",
      padding: "3px 8px",
      borderRadius: "var(--radius-artifact)",
      fontWeight: 700
    }
  }, "Alpha")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)"
    }
  }, NAV.map(({
    label,
    key
  }) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(key);
    },
    style: {
      textDecoration: "none",
      color: route === key ? "var(--foreground)" : "inherit",
      fontWeight: route === key ? 500 : 400
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseEnter: () => setDocsOpen(true),
    onMouseLeave: () => setDocsOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: "none",
      font: "inherit",
      color: docsOpen ? "var(--foreground)" : "inherit",
      cursor: "pointer",
      padding: 0
    }
  }, "Docs", /*#__PURE__*/React.createElement("span", {
    style: {
      transform: docsOpen ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-fast) var(--ease)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 13
  }))), docsOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 12,
      width: 256,
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border)",
      background: "var(--background)",
      boxShadow: "var(--shadow-xl)",
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -7,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)",
      width: 14,
      height: 14,
      borderLeft: "1px solid var(--border)",
      borderTop: "1px solid var(--border)",
      background: "var(--background)"
    }
  }), DOCS_SECTIONS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "10px 12px",
      borderRadius: "var(--radius-lg)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--primary)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-body)",
      fontWeight: 500,
      color: "var(--foreground)",
      lineHeight: 1,
      marginBottom: 4
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-snug)"
    }
  }, s.desc))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Pre-order"))));
}

// Rule 1: the paper grain layer. Sits under content, never over text.
function PaperTexture({
  wash
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      zIndex: 0,
      backgroundImage: wash ? "var(--texture-wash)" : "var(--texture-paper)",
      opacity: wash ? "var(--texture-wash-opacity)" : "var(--texture-paper-opacity)",
      mixBlendMode: "multiply"
    }
  });
}

// The twin's register: a 16px spec grid.
function SpecGrid() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      zIndex: 0,
      opacity: 0.55,
      backgroundImage: "var(--spec-grid)",
      backgroundSize: "var(--spec-grid-size)"
    }
  });
}
function SectionHead({
  eyebrow,
  title,
  sub,
  mascot,
  mascotSide = "right"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 56,
      position: "relative"
    }
  }, mascot && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/" + mascot,
    alt: "Shibasuke",
    style: {
      position: "absolute",
      top: -40,
      [mascotSide]: 0,
      height: 210
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-twin)",
      fontSize: "var(--twin-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--twin-ink)",
      margin: "0 0 14px",
      fontWeight: 700
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-human)",
      fontSize: "var(--human-h2)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      margin: 0,
      lineHeight: "var(--leading-tight)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: "var(--ink-muted)",
      fontSize: "var(--twin-body)",
      maxWidth: 460,
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "var(--leading-relaxed)"
    }
  }, sub));
}
function Footer({
  theme
}) {
  const cols = [{
    title: "Company",
    items: ["About", "Manifesto", "Blog", "Careers"]
  }, {
    title: "Explore",
    items: ["Enterprise", "Pricing", "Docs"]
  }, {
    title: "Connect",
    items: ["Discord", "X / Twitter", "LinkedIn", "GitHub"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border)",
      background: "var(--background)",
      padding: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-max)",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 32,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: theme === "dark" ? "../../assets/logo/tsuin-white-horizontal-full.png" : "../../assets/logo/tsuin-black-horizontal-full.png",
    alt: "Tsuin",
    style: {
      height: 28,
      marginBottom: 16,
      mixBlendMode: theme === "light" ? "multiply" : "normal"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)",
      maxWidth: 320,
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, "You train it. You own it. It runs on your machine.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-twin)",
      fontWeight: 600,
      fontSize: "var(--twin-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      margin: "0 0 14px"
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--text-body)",
      color: "var(--muted-foreground)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      paddingTop: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "var(--text-label)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 tsuin. Kuala Lumpur \u2192 the world."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20
    }
  }, ["Privacy", "Terms", "Security"].map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, i))))));
}
Object.assign(window, {
  Navbar,
  Footer,
  PaperTexture,
  SpecGrid,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarImage = __ds_scope.AvatarImage;

__ds_ns.AvatarFallback = __ds_scope.AvatarFallback;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DialogHeader = __ds_scope.DialogHeader;

__ds_ns.DialogTitle = __ds_scope.DialogTitle;

__ds_ns.DialogDescription = __ds_scope.DialogDescription;

__ds_ns.DialogFooter = __ds_scope.DialogFooter;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SelectItem = __ds_scope.SelectItem;

__ds_ns.SelectLabel = __ds_scope.SelectLabel;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsTrigger = __ds_scope.TabsTrigger;

__ds_ns.TabsContent = __ds_scope.TabsContent;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();
