export const htmlStyles = `
.yoxel-type-area {
  border: 1px solid red;
  padding :8px;  
  position: relative;
}

.yoxel-type-area:before {
 content: attr(data-type);
 position: absolute;
 left:0;
 top:0;
}
`

