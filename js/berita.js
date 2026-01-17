async function getBerita(){
const restponse = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dcc4722edc184f608a6cce9e757b4579",
    );

const data = await restponse.json();
console.log(data.articles);

if (data.articles.length > 0) {
    console.log("Data tidak ditemukan")
}

let html = "";
html = generateHtmlBerita(data.articles);
document.getElementById("berita").innerHTML = html;
}

function generateHtmlBerita(data) 
{
    return data
    .map((item) => {
        return `<div class="card-berita">
              <img
                src="${item.urlToImage}"
                alt="gambar berita"/>
              <div class="card-berita-teks">
              <h6>${item.author}</h6>
                <h5>${limitText(item.title,40)}</h5>
               <small>${item.publishedAt}</small>
                <p>${limitText(item.content,100)}</p>
              </div>
            </div>`;
    })
    .join("");
}

function limitText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
}


document.addEventListener("DOMContentLoaded", getBerita());
