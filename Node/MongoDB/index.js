/*
    聚合管道

    对集合中的文档进行变换和组合

    实际项目： 表关联查询，数据的统计
*/
db.order_item.insertOne({order_id: 3, title: '牛奶6', price: 50, num: 1})

// $project 查询指定的字段
db.order.aggregate([{$project: {order_id: 1, all_price: 1}}])

// $match 操作 类似于find操作
db.order.aggregate([
    {$project: {order_id: 1, all_price: 1}},
    {
        $match: {
            'all_price': {$gte: 120}
        }
    }
])

// $group 将集合中的文档进行分组 可用于统计结果
db.order_item.aggregate([
    {
        $group: {
            _id: "$order_id",
            total: {$sum: '$num'}
        }
    }
])

// $sort 排序

db.order_item.aggregate([
    {
        $sort: {
            "price": -1
        }
    }
])

// $limit + $skip 分页操作

// $lookup
/*
    from: 跟哪个集合关联
    localField： 
*/
db.order.aggregate([
    {
        $lookup: {
            from: "order_item",
            localField: "order_id",
            foreignField: "order_id",
            as: "items" 
        }
    }
])
