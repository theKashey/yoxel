export const htmlStyles = `
.yoxel-type-area {
  border: 1px solid red;
  padding: 2px;  
  position: relative;
  padding-top: 4px;
}

.yoxel-type-area:before {
 content: attr(data-type);
 background-color: #EFE;
 padding: 4px;
}
`

