const NamedParametersVisitor = {
    BinaryExpression(path) {
        path.node.operator = path.node.operator === '+' ? '-' : '+';
    }
};

module.exports = () => ({
    visitor: NamedParametersVisitor
});