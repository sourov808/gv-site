[2026-04-05 17:02] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Runtime error - Spline",
    "EXPECTATION": "The 3D Earth in the Hero section should render without browser runtime errors.",
    "NEW INSTRUCTION": "WHEN using @splinetool/react-spline THEN use a verified scene URL and provide onError fallback."
}

[2026-04-05 17:23] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Spline runtime error",
    "EXPECTATION": "The Hero's 3D Earth must render without crashing; use a valid Spline scene and handle errors.",
    "NEW INSTRUCTION": "WHEN using Spline in Hero THEN validate scene URL and implement onError fallback UI"
}

[2026-04-05 17:32] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Runtime error - Spline",
    "EXPECTATION": "The Hero's 3D Earth must render without runtime errors by using a valid Spline scene and handling failures.",
    "NEW INSTRUCTION": "WHEN using @splinetool/react-spline THEN use a verified scene URL and implement onError fallback UI"
}

[2026-04-05 18:24] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Runtime error - missing import",
    "EXPECTATION": "NatureSequence must import useScroll from framer-motion so the hook is defined at runtime.",
    "NEW INSTRUCTION": "WHEN a component uses useScroll THEN import useScroll from framer-motion at the top"
}

[2026-04-05 18:30] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Visual overlay issue",
    "EXPECTATION": "Remove the unattractive overlay and make all sections appear with smooth animations.",
    "NEW INSTRUCTION": "WHEN a section uses a dark/translucent overlay THEN remove it and use subtle animated reveals"
}

[2026-04-05 19:18] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Transition quality - scroll transform",
    "EXPECTATION": "Hero and Preservation transitions should be driven by scroll-based transforms for smoother visuals.",
    "NEW INSTRUCTION": "WHEN updating Hero or Preservation transitions THEN map scrollYProgress with useTransform to drive styles"
}

