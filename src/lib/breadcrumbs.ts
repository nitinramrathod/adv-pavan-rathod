export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const createBreadcrumbs = (baseUrl: string, pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: baseUrl },
  ];

  const segments = pathname.split("/").filter(Boolean);

  segments.forEach((segment, index) => {
    const url = `${baseUrl}/${segments.slice(0, index + 1).join("/")}`;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    if (url !== baseUrl) {
      breadcrumbs.push({ name, url });
    }
  });

  return breadcrumbs;
};

export const createBlogBreadcrumbs = (baseUrl: string, blogTitle: string): BreadcrumbItem[] => [
  { name: "Home", url: baseUrl },
  { name: "Blog", url: `${baseUrl}/blog` },
  { name: blogTitle, url: "" },
];

export const createCasesBreadcrumbs = (baseUrl: string, caseTitle: string): BreadcrumbItem[] => [
  { name: "Home", url: baseUrl },
  { name: "Cases", url: `${baseUrl}/cases` },
  { name: caseTitle, url: "" },
];
