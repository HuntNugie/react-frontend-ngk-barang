export const Dashboard = () => {
    return (
        <>
            
            {/* KONTEN */}
            <div className="col-lg-10 p-4">
                <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm p-3">
                            <h5>Total Barang</h5>
                            <p className="display-6">120</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm p-3">
                            <h5>Stok Tersedia</h5>
                            <p className="display-6">80</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm p-3">
                            <h5>Terjual</h5>
                            <p className="display-6">40</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Daftar Barang</h5>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Barang</th>
                                        <th>Harga</th>
                                        <th>Stok</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Meja Kayu</td>
                                        <td>Rp500.000</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Kursi Plastik</td>
                                        <td>Rp150.000</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lemari Pakaian</td>
                                        <td>Rp1.200.000</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
