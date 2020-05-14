export default {
	methods:{
		exportExcel(tableDom, xlsxName){
		    // generate workbook object from table
		    // 从表生成工作簿对象
		    let tableData = this.$XLSX.utils.table_to_book( tableDom );
		    // get binary string as output
		    // 获取二进制字符串作为输出
		    let wbout = this.$XLSX.write( tableData, {type:'array'});
		    try {
		        this.$FileSaver.saveAs(new Blob([wbout]), xlsxName);
		    }catch(err){
		        console.log(err)
		    }
		
		    // /* generate workbook object from table */
		    // let wb =this.$XLSX.utils.table_to_book(document.querySelector('#downqueryshareaccessrpttable'));
		    // /* get binary string as output */
		    // let wbout = this.$XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
		    // try {
		    //     this.$FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '资产报表.xlsx');
		    // } catch (e){
		    //     if (typeof console !== 'undefined')
		    //     console.log(e, wbout)
		    // }
		    // return wbout
		},
	}
}