export default function formatCurrncy(num) {
    return Number("" + num.toFixed().toLocaleString()+ "")
}