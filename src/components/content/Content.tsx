import './Content.scss';
import Tree from "../tree/Tree";

const Content = () => {
  return (
    <>
      <div className="main-content">
        <div className="tree">
          <Tree data={treeData}/>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere pariatur facilis totam, deserunt optio beatae rerum distinctio rem ratione, dolorum blanditiis tenetur cumque nobis qui? Et minima sunt laudantium?
        </div>
      </div>
    </>
  )
}
const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-6",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
];
export default Content
