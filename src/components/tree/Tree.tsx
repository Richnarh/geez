import './Tree.scss';
import TreeNode from "./TreeNode";
const Tree = ({data}) => {
  return (
    <div className="main-tree">
      <div className="tree-data">
        <ul>
          {data.map((tree: any) =>(
            <TreeNode key={tree.key} node={tree}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Tree
