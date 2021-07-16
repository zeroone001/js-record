/*
    先序遍历
    中序遍历
    后序遍历
*/

function generatorBST() {
    this.root = null;
    function Node(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    }
    generatorBST.prototype.insert = function (key) {
        let newNode = new Node(key);
        // 假如没有节点
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertInner(this.root, newNode);
        }
    };
    generatorBST.prototype.insertInner = function (node, newNode) {
        if (node.key > newNode.key) {
            // 新的节点插到左侧
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertInner(node.left, newNode);
            }
        } else {
            // 新的节点插到右侧
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertInner(node.right, newNode);
            }
        }
    };
    // 先序遍历， 递归
    generatorBST.prototype.preOrderTraversel = function (handle) {
        this.preOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.preOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            handle(node.key);
            this.preOrderTraverselNode(node.left, handle);
            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 中序遍历
    generatorBST.prototype.midOrderTraversel = function (handle) {
        this.midOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.midOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            this.preOrderTraverselNode(node.left, handle);

            handle(node.key); // 关键

            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 后序遍历

    

}

